import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    api.get('/productos')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul className="product-list">
        {productos.map(producto => (
          <li key={producto.id}>
            <strong>{producto.nombre}</strong> - ${producto.precio} (Stock: {producto.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;