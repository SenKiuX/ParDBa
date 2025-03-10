const client = require('../database/cockroachdb');

const Producto = {
  crear: async (nombre, precio, stock) => {
    const query = 'INSERT INTO Productos(nombre, precio, stock) VALUES($1, $2, $3) RETURNING *';
    const values = [nombre, precio, stock];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  obtenerTodos: async () => {
    const query = 'SELECT * FROM Productos';
    const result = await client.query(query);
    return result.rows;
  },

  actualizar: async (id, nombre, precio, stock) => {
    const query = 'UPDATE Productos SET nombre = $1, precio = $2, stock = $3 WHERE id = $4 RETURNING *';
    const values = [nombre, precio, stock, id];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  eliminar: async (id) => {
    const query = 'DELETE FROM Productos WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await client.query(query, values);
    return result.rows[0];
  },
};

module.exports = Producto;