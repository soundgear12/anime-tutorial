import alt from "../alt"
import Actions from "../actions"

const axios = require('axios')

const getAllUrl = "http://localhost:4000/getAllAnime/"
const deleteUrl = "http://localhost:4000/deleteAnime/"
const resetAnimeUrl = "http://localhost:4000/resetAnime/"
const resetAnimeGenreUrl = "http://localhost:4000/resetAnimeGenre/"
const addUrl = "http://localhost:4000/addAnime/"

class AnimeStore {
    constructor() {
        this.animes = []

        this.bindListeners({
            handleGetAnimes: Actions.GET_ANIMES,
            handleDeleteAnime: Actions.DELETE_ANIME,
            handleResetAnime: Actions.RESET_ANIME_TABLE,
            handleResetAnimeGenre: Actions.RESET_ANIME_GENRE_TABLE,
            handleAddAnime: Actions.ADD_ANIME
        })
    }

    handleGetAnimes = payload => {
        console.log("get animes from AnimeStore")

        fetch(getAllUrl)
            .then(res => res.json())
            .then(json => {
                return this.setState({ animes: json })
            })
    }

    handleDeleteAnime = id => {
        console.log(`AnimeStore :: handle delete called on anime_id ${id}`)
        fetch(`${deleteUrl}${id}`).then(() => {
            this.handleGetAnimes("")
        })
    }

    handleResetAnime = payload => {
        console.log("AnimeStore :: handle reset anime table")
        fetch(resetAnimeUrl).then(() => {
            this.handleGetAnimes("")
        })
    }

    handleResetAnimeGenre = payload => {
        console.log("AnimeStore :: handle reset anime_genre table")
        fetch(`${resetAnimeGenreUrl}`)
    }

    handleAddAnime = anime => {
        console.log(`AnimeStore :: handle add anime w/ anime ${anime}`)

        axios.post(`${addUrl}:name/:animeId/:type/:episodes/:rating/:members/:genres`, {
            name: anime.name,
            animeId: anime.animeId,
            type: anime.type,
            episodes: anime.episodes,
            rating: anime.rating,
            members: anime.members,
            genres: anime.genres
        }).then(() => {
            this.handleGetAnimes("")
        }).catch(err => {    
            console.log("handleAddAnime error!")
            console.log(err)
        })
    }
}

export default AnimeStore = alt.createStore(AnimeStore, "AnimeStore")
window.AnimeStore = AnimeStore;