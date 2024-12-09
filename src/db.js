import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: '172.19.0.2',
  database: 'exampledb',
  password: 'admin',
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log('Conexión a PostgreSQL exitosa');
  })
  .catch((err) => {
    console.error('Error de conexión a PostgreSQL', err);
  });

export const query = (text, params) => pool.query(text, params);

export default pool;