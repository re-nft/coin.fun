-- Perform an insert into the points table with the following conditions:
--
-- - For each user where character_s1 is not null, select all tweets since the
--   last update to points where quest_id = '0003-daily-tweet'. The acquired_at
--   column dictates this. If this doesn't yield a result, select all tweets.
--
-- - The tweets need to be reduced to only having the tweet with the most
--   engagement for a particular day. Use favorite_count, quote_count,
--   reply_count and retweet_count for this.
--
-- - The resulting tweets can be inserted to points with the following:
--   quest_id = '0003-daily-tweet', user_id is the corresponding tweet's user_id,
--   acquired_at is the corresponding tweet's created_at, the points will be
--   100000 when character_s1 = 'heftie' and corresponding tweet has a
--   retweeted_id or 200000 when character_s1 = 'heftie' and the corresponding
--   tweet has a quoted_id or 100000 when character_s1 = 'normie'. Discard all
--   tweets not matching either of these conditions.
CREATE OR REPLACE FUNCTION public.add_daily_tweet_points()
RETURNS VOID
AS $$
BEGIN
  -- Step 1: Identify users with `character_s1` not null
  WITH users_with_character AS (
      SELECT id, character_s1
      FROM profiles
      WHERE character_s1 IS NOT NULL
  ),
  -- Step 2: Select all tweets since the last update to points where quest_id = '0003-daily-tweet'. If no such update exists, select all tweets.
  last_update AS (
      SELECT user_id, MAX(acquired_at) AS last_acquired_at
      FROM points
      WHERE quest_id = '0003-daily-tweet'
      GROUP BY user_id
  ),
  tweets_since_last_update AS (
      SELECT t.*
      FROM tweets t
      JOIN users_with_character u ON t.user_id = u.id
      LEFT JOIN last_update lu ON t.user_id = lu.user_id
      WHERE t.created_at > COALESCE(lu.last_acquired_at, '1970-01-01 00:00:00'::timestamp)
  ),
  -- Step 3: Reduce the tweets to only the one with the most engagement per day
  tweets_with_engagement AS (
      SELECT
          t.user_id,
          t.created_at::date AS tweet_date,
          t.id,
          t.favorite_count + t.quote_count + t.reply_count + t.retweet_count AS engagement
      FROM tweets_since_last_update t
  ),
  most_engaging_tweets AS (
      SELECT DISTINCT ON (user_id, tweet_date)
          user_id,
          tweet_date,
          id,
          engagement
      FROM tweets_with_engagement
      ORDER BY user_id, tweet_date, engagement DESC
  ),
  filtered_tweets AS (
      SELECT
          t.user_id,
          t.id,
          t.created_at,
          u.character_s1,
          CASE
              WHEN u.character_s1 = 'heftie' AND t.retweeted_id IS NOT NULL THEN 100000
              WHEN u.character_s1 = 'heftie' AND t.quoted_id IS NOT NULL THEN 200000
              WHEN u.character_s1 = 'normie' THEN 100000
              ELSE NULL
          END AS points
      FROM most_engaging_tweets met
      JOIN tweets t ON met.id = t.id
      JOIN users_with_character u ON t.user_id = u.id
      WHERE (u.character_s1 = 'heftie' AND t.retweeted_id IS NOT NULL)
        OR (u.character_s1 = 'heftie' AND t.quoted_id IS NOT NULL)
        OR u.character_s1 = 'normie'
  )
  -- Step 4: Insert the transformed data into the `points` table
  INSERT INTO points (user_id, quest_id, points, acquired_at)
  SELECT
      user_id,
      '0003-daily-tweet' AS quest_id,
      points,
      created_at AS acquired_at
  FROM filtered_tweets
  ON CONFLICT (user_id, quest_id, acquired_at) DO NOTHING;
END;
$$ LANGUAGE plpgsql;

-- Cron trigger which runs the kraken above each day at midnight. Since twitter
-- aggregation happens hourly this might have some wonky results but these
-- should auto-correct
SELECT cron.schedule(
  '0003-daily-tweet',
  '0 0 * * *',
  'SELECT public.add_daily_tweet_points()'
);
