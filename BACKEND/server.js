const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5174;
const mysql = require("mysql2");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'wissem321456',
    database: 'fika',
    connectionLimit: 10
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/api/books", (req, res) => {
  const selectBookData = "SELECT * FROM bookinfo";
 
  db.query(selectBookData, (err, results) => {
      if (err) {
          console.error('Failed to fetch book infos:', err);
          res.sendStatus(500);
          return;
      }
      res.json(results);
  });
});

app.get("/api/books", (req, res) => {
    const selectBookData = "SELECT * FROM bookinfo";
   
    db.query(selectBookData, (err, results) => {
        if (err) {
            console.error('Failed to fetch book infos:', err);
            res.sendStatus(500);
            return;
        }
        res.json(results);
    });
});

app.get('/api/books/search', (req, res) => {
  const searchTerm = req.query.term;
  const query = `SELECT * FROM bookinfo WHERE title LIKE '%${searchTerm}%'`;

  connection.query(query, (err, results) => {
      if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }

      res.json(results);
  });
});



app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});
