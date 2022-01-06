import alt from "../alt"
import toastr from "toastr"

class Actions {

    getAnimes(payload) {
        return payload
    }

    deleteAnime(id) {
        toastr.success(`Deleted anime with id ${id} from Anime table!`)
        return id
    }

    resetAnimeTable(payload) {
        toastr.success("Reset Anime table!")
        return payload
    }

    resetAnimeGenreTable(payload) {
        toastr.success("Reset Anime_Genre table!")
        return payload
    }

    resetUserTable(payload) {
        toastr.success("Reset Users table!")
        return payload
    }

    resetReviewTable(payload) {
        toastr.success("Reset Reviews table!")
        return payload
    }

    resetUserReviewTable(payload) {
        toastr.success("Reset User_Review table!")
        return payload
    }
}

export default alt.createActions(Actions)