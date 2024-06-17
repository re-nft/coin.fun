-- Update daily bonus to take signup into account if interval is < 1 day.
CREATE OR REPLACE FUNCTION public.add_daily_signup_bonus()
RETURNS VOID
AS $$
BEGIN
  INSERT INTO public.points (user_id, quest_id, points)
  SELECT
    id,
    '0001-daily-bonus',
    CASE
      WHEN age (created_at) < INTERVAL '1 day'
      THEN ROUND(EXTRACT(epoch FROM NOW() - created_at))
      ELSE 86400
    END
  FROM auth.users
  ON CONFLICT DO NOTHING;
END;
$$ LANGUAGE plpgsql;
