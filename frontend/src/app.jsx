import React from 'react';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import './styles/app.css'; // Importa los estilos

const App = () => {
  return (
    <div className="app-container">
      <h1>Restaurante App</h1>
      <CreateProduct />
      <ProductList />
    </div>
  );
};

export default App;