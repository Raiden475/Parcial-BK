const express = require('express');
const { Producto } = require('../models');
const router = express.Router();
const { Op } = require('sequelize');

// Crear un nuevo producto
router.post('/', async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un producto por su id
router.get('/:id', async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un producto por su id
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Producto.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProducto = await Producto.findByPk(req.params.id);
      res.json(updatedProducto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un producto por su id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Producto.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una lista de productos ordenada
router.get('/ordenados', async (req, res) => {
  const { criterio } = req.query;
  const validCriterios = ['nombre', 'precio', 'cantidad'];

  if (!validCriterios.includes(criterio)) {
    return res.status(400).json({ error: 'Criterio de ordenación inválido' });
  }

  try {
    const productos = await Producto.findAll({ order: [[criterio, 'ASC']] });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una lista de productos que cumplan con ciertas condiciones
router.get('/filtrados', async (req, res) => {
  const { precioMin, categoria } = req.query;
  const where = {};

  if (precioMin) {
    where.precio = { [Op.gte]: precioMin };
  }

  if (categoria) {
    where.categoria = categoria;
  }

  try {
    const productos = await Producto.findAll({ where });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
