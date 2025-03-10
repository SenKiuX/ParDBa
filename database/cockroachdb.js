const { Client } = require('pg');

const client = new Client({
  user: 'camilo',
  host: 'cooled-mink-4714.jxf.gcp-us-east1.cockroachlabs.cloud',
  database: 'rest_app',
  password: 'Ganac-tsHXDp5uYPVBvMlw',
  port: 26257,
  ssl: {
    rejectUnauthorized: false, // Usa esto solo en desarrollo
  },
});

client.connect()
  .then(() => console.log('Conectado a CockroachDB'))
  .catch(err => console.error('Error de conexión', err));

module.exports = client;