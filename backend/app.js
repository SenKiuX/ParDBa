const express = require('express');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

app.use(express.json());
app.use('/api', productoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});