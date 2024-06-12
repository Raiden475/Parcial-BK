const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { syncDatabase } = require('./models');
const productoRoutes = require('./routes/productos');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/productos', productoRoutes);

const PORT = process.env.PORT || 3000;

syncDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
