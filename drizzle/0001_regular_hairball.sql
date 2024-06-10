-- Enable `pg_cron` extension.
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Daily bonus function. Applies a 86400 point bonus for
-- each distinct user in the `auth.users` table.
CREATE OR REPLACE FUNCTION public.add_daily_signup_bonus()
RETURNS VOID
AS $$
BEGIN
  INSERT INTO public.points (user_id, quest_id, points)
  SELECT id, '0001-daily-bonus', 86400
  FROM auth.users
  ON CONFLICT DO NOTHING;
END;
$$ LANGUAGE plpgsql;

-- Add the cron trigger for each day at midnight.
-- We're assuming the trigger hasn't been created yet at this point.
-- If this ever gives issues we'll fix it accordingly.
SELECT cron.schedule(
  '0001-daily-bonus',
  '0 0 * * *',
  'SELECT public.add_daily_signup_bonus()'
);

-- Lastly, gib points retroactively
INSERT INTO public.points (user_id, quest_id, points, acquired_at)
  SELECT
    users.id,
    '0001-daily-bonus',
    86400,
    (users.created_at::date + days.days_since_signup * INTERVAL '1 day' + INTERVAL '1 day')
  FROM
    auth.users users
    JOIN (
      SELECT
        id,
        GENERATE_SERIES(
          0,
          FLOOR(
            EXTRACT(
              epoch
              FROM
                age (created_at)
            ) / 86400
          )
        ) AS days_since_signup
      FROM
        auth.users
    ) days ON users.id = days.id;
