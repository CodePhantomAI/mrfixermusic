/*
  # Add SEO and Metadata Fields to Blog Posts

  1. Changes
    - Add `meta_description` (text) - SEO meta description with 160 character limit
    - Add `featured_image_alt` (text) - Alt text for featured image (accessibility)
    - Add `category` (text) - Post category for organization
    - Add `tags` (text array) - Tags for better content discovery
  
  2. Notes
    - All fields are nullable to maintain backward compatibility
    - Tags stored as array for flexible querying
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'meta_description'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN meta_description text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'featured_image_alt'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN featured_image_alt text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'category'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN category text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'tags'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN tags text[] DEFAULT '{}';
  END IF;
END $$;