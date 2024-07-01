CREATE MATERIALIZED VIEW leaderboard AS
SELECT 
    user_id,
    SUM(points) AS total_points,
    createdAt
FROM 
    points
GROUP BY 
    user_id, createdAt;

CREATE OR REPLACE FUNCTION refresh_leaderboard()
RETURNS VOID AS $$
BEGIN
    REFRESH MATERIALIZED VIEW leaderboard;
END;
$$ LANGUAGE plpgsql;


SELECT cron.schedule('0 0 * * *', 'SELECT refresh_leaderboard();');
