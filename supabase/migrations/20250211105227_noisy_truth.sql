-- Update ZIM logo dimensions
UPDATE company_logos
SET class_name = 'w-[1.5cm] h-[1.5cm] object-contain'
WHERE name = 'ZIM';

-- Add CSS class for consistent logo sizing
COMMENT ON TABLE company_logos IS 'Company logos with standardized 1.5cm x 1.5cm dimensions';