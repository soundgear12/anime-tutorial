const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lat1618!",
    database: "Tutorial"
})
let query = ""

db.connect(err => {
    if (err) throw err;
    console.log("Connection successful!")

    query = "DROP TABLE IF EXISTS ANIME"
    executeQuery(query, "Anime table dropped!")

    query = "CREATE TABLE ANIME (row_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), "
        + "anime_id INT, type VARCHAR(255), episodes INT, rating DECIMAL, members INT)"
    executeQuery(query, "Anime table created!")

    query = "LOAD DATA LOCAL INFILE 'csv/animeTable.csv' INTO TABLE ANIME FIELDS TERMINATED BY ',' IGNORE 1 LINES"
        + "(name, anime_id, type, episodes, rating, members)"
    executeQuery(query, "Anime table loaded!\n")

    // drop table statements
    query = "DROP TABLE IF EXISTS GENRES";
    executeQuery(query, "Genres table dropped")

    query = "DROP TABLE IF EXISTS ANIME_GENRE";
    executeQuery(query, "Anime_Genre table dropped")

    query = "DROP TABLE IF EXISTS REVIEWS";
    executeQuery(query, "Reviews table dropped")

    query = "DROP TABLE IF EXISTS USERS";
    executeQuery(query, "Users table dropped")

    query = "DROP TABLE IF EXISTS USER_REVIEW";
    executeQuery(query, "User_Review table dropped\n")

    // create table statements
    query = "CREATE TABLE GENRES (genre VARCHAR(255), id INT)"
    executeQuery(query, "Genre table created")

    query = "CREATE TABLE ANIME_GENRE (row_id INT AUTO_INCREMENT PRIMARY KEY, anime_id INT, genre_id INT)"
    executeQuery(query, "Anime_Genre table created")

    query = "CREATE TABLE REVIEWS (row_id INT AUTO_INCREMENT PRIMARY KEY, review VARCHAR(255), anime_id INT, user_id INT, date_time DATETIME)"
    executeQuery(query, "Reviews table created")

    query = "CREATE TABLE USERS (user_id INT, first_name VARCHAR(255), last_name VARCHAR(255), "
        + "email VARCHAR(255), gender VARCHAR(255), username TEXT, "
        + "password VARCHAR(255), avatar_image VARCHAR(255), hex_color VARCHAR(255))"
    executeQuery(query, "Users table created")

    query = "CREATE TABLE USER_REVIEW (user_id INT, review VARCHAR(255))"
    executeQuery(query, "User_Review table created\n")

    // load table statements
    query = "LOAD DATA LOCAL INFILE 'csv/genresTable.csv' INTO TABLE GENRES FIELDS TERMINATED BY ',' IGNORE 1 LINES"
    executeQuery(query, "Genres table loaded")

    query = "LOAD DATA LOCAL INFILE 'csv/animeGenreTable.csv' INTO TABLE ANIME_GENRE FIELDS TERMINATED BY ',' "
        + "IGNORE 1 LINES (anime_id, genre_id)"
    executeQuery(query, "Anime_Genre table loaded")

    query = "LOAD DATA LOCAL INFILE 'csv/reviewsTable.csv' INTO TABLE REVIEWS FIELDS TERMINATED BY ',' "
        + "IGNORE 1 LINES (review, anime_id, user_id, date_time)"
    executeQuery(query, "Reviews table loaded")

    query = "LOAD DATA LOCAL INFILE 'csv/usersTable.csv' INTO TABLE USERS FIELDS TERMINATED BY ',' IGNORE 1 LINES "
        + "(user_id, first_name, last_name, email, gender, username, password, avatar_image, hex_color)"
    executeQuery(query, "Users table loaded")

    query = "LOAD DATA LOCAL INFILE 'csv/userReviewTable.csv' INTO TABLE USER_REVIEW FIELDS TERMINATED BY ',' IGNORE 1 LINES "
        + "(user_id, review)"
    executeQuery(query, "User_Review table loaded\n")

    db.end(err => {
        if (err) throw err;
        console.log("Closing the database connection")
    })
})

function executeQuery(query, msg) {
    db.query(query, err => {
        if (err) throw err;
        console.log(msg)
    })
}