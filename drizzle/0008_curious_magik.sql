CREATE MATERIALIZED VIEW leaderboard_mv AS
SELECT 
    id,
    SUM(points) AS total_points,
    date
FROM 
    profiles
GROUP BY 
    id, date;

CREATE OR REPLACE FUNCTION refresh_leaderboard_mv()
RETURNS VOID AS $$
BEGIN
    REFRESH MATERIALIZED VIEW leaderboard_mv;
END;
$$ LANGUAGE plpgsql;


SELECT cron.schedule('0 0 * * *', 'SELECT refresh_leaderboard_mv();');