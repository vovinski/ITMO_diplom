const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Подключение к базе данных MySQL
const db = mysql.createConnection({
  //host: 'db:3306',
  host: 'db',
  port: "3306",
  user: 'lvv',
  password: 'lvv_pass',
  database: 'productdb'
});

// Подключение к базе данных
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Маршрут для получения данных из базы данных
app.get('/data', (req, res) => {
  let sql = 'SELECT * FROM Products';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});