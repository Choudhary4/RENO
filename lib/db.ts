import mysql from 'mysql2/promise';

// Support both connection URL and individual credentials
const createDatabasePool = () => {
  // If DATABASE_URL is provided (Railway format), use it
  if (process.env.DATABASE_URL) {
    return mysql.createPool({
      uri: process.env.DATABASE_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  
  // Otherwise use individual credentials
  return mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
};

const pool = createDatabasePool();

export default pool;
