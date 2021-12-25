const Papa = require('papaparse')
const fs = require('fs')

const animeFilePath = './csv/anime.csv'
const animeFile = fs.readFileSync(animeFilePath, "utf8")

const animeRows = {}
Papa.parse(animeFile, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        animeRows.data = results.data
        animeRows.errors = results.errors
        animeRows.meta = animeRows.meta
    }
})

const animeArray = animeRows.data.map(row => {
    const { name, anime_id, type, episodes, rating, members } = row
    const edittedName = name.replace(/,/g, ' ')

    return { name: edittedName, anime_id, type, episodes, rating, members }
})

const animeData = Papa.unparse(animeArray)
createFile('./csv/animeTable.csv', animeData, "Anime table successfully saved!")

function createFile(filePath, data, msg) {
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(msg)
    })
}