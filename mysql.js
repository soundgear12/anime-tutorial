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

    query= "LOAD DATA LOCAL INFILE 'csv/animeTable.csv' INTO TABLE ANIME FIELDS TERMINATED BY ',' IGNORE 1 LINES"
     + "(name, anime_id, type, episodes, rating, members)"
     executeQuery(query, "Anime table loaded!")
     
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