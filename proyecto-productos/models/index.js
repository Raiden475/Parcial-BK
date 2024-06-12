const sequelize = require('../config/database');
const Producto = require('./producto');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Cambia a { alter: true } en producción
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

module.exports = {
  Producto,
  syncDatabase
};
