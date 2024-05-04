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

app.get('/api/books/genres', async (req, res) => {
    try {
        const { category } = req.query;
        console.log('Category:', category);

        const query = 'SELECT * FROM book WHERE category = ? LIMIT 1';
        db.query(query, [category], (error, results) => {
            if (error) {
                console.error('Error fetching books:', error);
                res.status(500).json({ error: 'Failed to fetch books' });
                return;
            }
            res.json(results);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});



app.post("/api/INSERT/FAV", (req, res) => {
    const { idBook, idUser } = req.body;

    const addFav = "INSERT INTO `fika`.`favouritbook` (`Favourite_id`, `Book_id`, `User_id`) VALUES ('0', ?, ?);";
    db.query(addFav, [idBook, idUser], (err, result) => {
        if (err) {
            console.error("Error inserting favorite:", err);
            return res.status(500).json({ error: "Error inserting favorite" });
        }
        console.log("Favorite inserted successfully");
        res.status(200).json({ message: "Favorite inserted successfully" });
    });
});

app.delete("/api/DELETE/FAV", (req, res) => {
    const { idBook, idUser } = req.body;
    const removeFav = "DELETE FROM `favouritbook` WHERE `bookID` = ? AND `userID` = ?;";
    db.query(removeFav, [idBook, idUser], (err, result) => {
      if (err) {
        console.error("Error removing favorite:", err);
        return res.status(500).json({ error: "Error removing favorite" });
      }
      console.log("Favorite removed successfully");
      res.status(200).json({ message: "Favorite removed successfully" });
    });
  });


app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});
