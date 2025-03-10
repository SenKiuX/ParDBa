const Producto = require('../models/Producto');

const crearProducto = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    const producto = await Producto.crear(nombre, precio, stock);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.obtenerTodos();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

module.exports = { crearProducto, obtenerProductos };