-- View all schools data
USE school_db;

-- Show all records in the schools table
SELECT * FROM schools;

-- Show count of schools
SELECT COUNT(*) as total_schools FROM schools;

-- Show schools with all details formatted
SELECT 
    id as 'ID',
    name as 'School Name',
    address as 'Address',
    city as 'City',
    state as 'State',
    contact as 'Contact',
    email_id as 'Email',
    image as 'Image Path',
    created_at as 'Created At'
FROM schools
ORDER BY id DESC;
