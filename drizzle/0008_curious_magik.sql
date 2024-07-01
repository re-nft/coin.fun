CREATE MATERIALIZED VIEW leaderboard AS
SELECT 
    user_id,
    SUM(points) AS total_points,
    date
FROM 
    points
GROUP BY 
    user_id, date;

CREATE OR REPLACE FUNCTION refresh_leaderboard()
    RETURNS VOID AS $$
BEGIN
    REFRESH MATERIALIZED VIEW leaderboard;
END;
$$ LANGUAGE plpgsql;


SELECT cron.schedule('0 0 * * *', 'SELECT refresh_leaderboard();');
