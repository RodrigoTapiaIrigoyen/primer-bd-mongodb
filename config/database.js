// config/database.js

const mongoose = require('mongoose');

const username = 'rodrigotapia33';
const password = 'cidroy123'; // Reemplaza con tu contraseña real
const cluster = 'prueba-1.qksyt.mongodb.net';
const dbname = 'test'; // O el nombre de la base de datos que deseas usar

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => console.log('MongoDB Atlas conectado...'))
  .catch(err => console.log('Error al conectar a MongoDB Atlas:', err));
