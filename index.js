const { createItem, readItems, updateItem, deleteItem } = require('./controllers/itemController');
const Item = require('./models/item');
require('./config/database');

// Crear y guardar documentos como ejemplo
const createInitialItems = async () => {
  await createItem('Laptop', 999.99);
  await createItem('iPhone', 779.99);
};

// Ejecutar funciones
const run = async () => {
  // Limpiar la base de datos
  await Item.deleteMany({});

  await createInitialItems();

  const items = await readItems();

  // Asegúrate de usar ObjectIds reales aquí
  if (items.length > 0) {
    const testId = items[0]._id; // Usar el ID del primer item como ejemplo

    await updateItem(testId, { price: 1099.99 });
    await deleteItem(testId);
  }

  // Leer items nuevamente para verificar los cambios
  await readItems();
};

run().catch(console.error);
