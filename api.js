const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const port = 4000

const db = mysql. createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Lat1618!',
    database: 'Tutorial'
})

app.use(cors())

app.get('/getAllAnime', (req, res) => {
    const query = "SELECT * FROM ANIME"
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

app.listen(port, () => console.log(`REST API listening on port ${port}`))