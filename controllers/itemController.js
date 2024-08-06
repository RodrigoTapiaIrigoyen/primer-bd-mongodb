// controllers/itemController.js
const Item = require('../models/item');

// Crear un nuevo item
const createItem = async (name, price) => {
  try {
    const newItem = new Item({ name, price });
    const savedItem = await newItem.save();
    console.log('Item creado:', savedItem);
    return savedItem;
  } catch (error) {
    console.error('Error al crear item:', error);
  }
};

// Leer todos los items
const readItems = async () => {
  try {
    const items = await Item.find();
    console.log('Items:', items);
    return items;
  } catch (error) {
    console.error('Error al leer items:', error);
  }
};

// Actualizar un item por ID
const updateItem = async (id, updateData) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, updateData, { new: true });
    console.log('Item actualizado:', updatedItem);
    return updatedItem;
  } catch (error) {
    console.error('Error al actualizar item:', error);
  }
};

// Eliminar un item por ID
const deleteItem = async (id) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    console.log('Item eliminado:', deletedItem);
    return deletedItem;
  } catch (error) {
    console.error('Error al eliminar item:', error);
  }
};

module.exports = { createItem, readItems, updateItem, deleteItem };
