const express = require('express');
const { crearProducto, obtenerProductos } = require('../controllers/productoController');

const router = express.Router();

router.post('/productos', crearProducto);
router.get('/productos', obtenerProductos);

module.exports = router;