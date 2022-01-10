import alt from "../alt"
import Actions from "../actions"

const genreUrl = "http://localhost:4000/allGenres"
const largestAnimeUrl = "http://localhost:4000/largestAnimeId"

class GenreStore {
    constructor() {
        this.genres = []
        // this.largestAnimeId
        this.bindListeners({
            handleAllGenres: Actions.GET_ALL_GENRES,
            handleGetLargestAnimeId: Actions.GET_LARGEST_ANIME_ID
        })
    }

    handleAllGenres = payload => {
        console.log("Genrestore :: handle get all genres")

        fetch(`${genreUrl}`)
        .then(res => res.json())
        .then(json => {
            return this.setState({ genres: json })
        })
    }

    handleGetLargestAnimeId = payload => {
        console.log("Genrestore :: handle get largest anime id")

        fetch(`${largestAnimeUrl}`)
        .then(res => res.json())
        .then(json => {
            const { largest_anime_id } = json[0]
            return this.setState({ largestAnimeId: largest_anime_id })
        })
    }
}

export default GenreStore = alt.createStore(GenreStore, "GenreStore")
window.GenreStore = GenreStore