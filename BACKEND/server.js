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
    database: 'LibraryFika',
    connectionLimit: 10
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/books", (req, res) => {
    const selectBookData = "SELECT * FROM book";
   
    db.query(selectBookData, (err, results) => {
        if (err) {
            console.error('Failed to fetch books:', err);
            res.sendStatus(500);
            return;
        }
        res.json(results);
    });
});

app.get('/api/books/search', (req, res) => {
    const searchTerm = req.query.term;
    const query = `SELECT * FROM book WHERE title LIKE ?`;
    db.query(query, [`%${searchTerm}%`], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
});

app.get('/api/books/genres', (req, res) => {
    const { category, page } = req.query;
    console.log('category:', category);
    const limit = 5;
    const offset = (page - 1) * limit;

    let query = 'SELECT * FROM book';
    const params = [];

    if (category) {
        query += ' WHERE category = ?';
        params.push(category);
    }

    query += ' LIMIT ? OFFSET ?';
    params.push(limit, offset);

    db.query(query, params, (error, results) => {
        if (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Failed to fetch books' });
            return;
        }

        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});
