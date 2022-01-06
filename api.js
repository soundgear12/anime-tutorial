const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const SqlString = require('mysql/lib/protocol/SqlString')

const app = express()
const port = 4000

const db = mysql. createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Lat1618!',
    database: 'Tutorial',
    multipleStatements: true
})

app.use(cors())

function executeQuery(query, res) {
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
}

app.get('/getAllAnime', (req, res) => {
    const sql = "SELECT * FROM ANIME"
    executeQuery(sql, res)
})

app.get('/deleteAnime/:id', (req, res) => {
    const sql = `DELETE FROM Anime WHERE anime_id = ${req.params.id}`
    executeQuery(sql, res)
})

app.get('/resetAnime', (req, res) => {
    const sql = "DROP TABLE IF EXISTS Anime;" +
        "CREATE TABLE Anime (row_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), anime_id INT, type VARCHAR(255), episodes INT, rating DECIMAL, members INT);" +
        "LOAD DATA LOCAL INFILE 'csv/animeTable.csv' INTO TABLE Anime FIELDS TERMINATED BY ',' IGNORE 1 LINES (name, anime_id, type, episodes, rating, members);" 
        executeQuery(sql, res) 
})

app.get('/resetAnimeGenre', (req, res) => {
    const sql = "DROP TABLE IF EXISTS Anime_Genre;" +
        "CREATE TABLE Anime_Genre (row_id INT AUTO_INCREMENT PRIMARY KEY, anime_id INT, genre_id INT);" +
        "LOAD DATA LOCAL INFILE 'csv/animeGenreTable.csv' INTO TABLE Anime_Genre FIELDS TERMINATED BY ',' IGNORE 1 LINES (anime_id, genre_id)"
    executeQuery(sql, res)    
})

app.get('/resetUsers', (req, res) => {
    const sql = "DROP TABLE IS EXISTS Users;"
        + "CREATE TABLE USERS (user_id INT, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), gender VARCHAR(255), username TEXT, "
        + "password VARCHAR(255), avatar_image VARCHAR(255), hex_color VARCHAR(255));"
        + "LOAD DATA LOCAL INFILE 'csv/usersTable.csv' INTO TABLE USERS FIELDS TERMINATED BY ',' IGNORE 1 LINES "
        + "(user_id, first_name, last_name, email, gender, username, password, avatar_image, hex_color);"
    executeQuery(sql, res)  
})    

app.get('/resetReviews', (req, res) => {
    const sql = "DROP TABLE IF EXISTS Reviews;"
        + "CREATE TABLE Reviews (row_id INT AUTO_INCREMENT PRIMARY KEY, review VARCHAR(255), anime_id INT, user_id INT, date_time DATETIME);"
        + "LOAD DATA LOCAL INFILE 'csv/reviewsTable.csv' INTO TABLE Reviews FIELDS TERMINATED BY ',' "
        + "IGNORE 1 LINES (review, anime_id, user_id, date_time);"
    executeQuery(sql, res)
})

app.get('/resetUserReviews', (req, res) => {
    const sql = "DROP TABLE IF EXISTS User_Review;"
        + "CREATE TABLE User_Review (user_id INT, review VARCHAR(255));"
        + "LOAD DATA LOCAL INFILE 'csv/userReviewsTable.csv' INTO TABLE User_Review FIELDS TERMINATED BY ',' "
        + "IGNORE 1 LINES (user_id, review);"
    executeQuery(sql, res)
})


app.listen(port, () => console.log(`REST API listening on port ${port}`))