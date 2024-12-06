import { query } from "../db.js";

export const inicializaTabla = async () => {
  const queryText = `
    CREATE TABLE usuarios (
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
      VALUES ('John Doe', 'john.doe@example.com', '$2a$10$z4j3aB9i9h7w4X9O835/o.M8fXwR8b.u16y9j75h2x.r4g8v9907z', 'cliente');
    `;
    const values = [nombre, email, password, rol]
    const result = await query(queryText, values);
    return result.rows[0];
};
