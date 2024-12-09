import { query } from "../db.js";

export const inicializaTabla = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXIST usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        contraseña VARCHAR(255) NOT NULL,
        rol VARCHAR(50) NOT NULL CHECK (rol IN ('cliente', 'administrador')) );
    `;

  await query(queryText);
};

export const crearUsuario = async () => {
    const queryText = `
      INSERT INTO usuarios (nombre, email, contraseña, rol)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [nombre, email, password, rol]
    const result = await query(queryText, values);
    return result.rows[0];
};
