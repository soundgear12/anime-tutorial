import React, { Component } from 'react';
import Table from "./Table"
import ResetButton from './ResetButton';
import KH from '../../res/gifs/KH.gif'
import AnimeStore from '../../stores/AnimeStore';
import Actions from '../../actions';

export default class TableContainer extends Component {
    state = {
        animes: []
    }

    componentDidMount() {
        AnimeStore.listen(this.onChange)
        Actions.getAnimes("")
    }

    componentWillUnmount() {
        AnimeStore.unlisten(this.onChange)
    }

    onChange = store => {
        const { animes } = store
        this.setState({ animes })
    }

    handleDelete = event => {
        const { id } = event.target
        Actions.deleteAnime(id)
    }

    handleReset = () => {
        Actions.resetAnimeTable("")
        Actions.resetAnimeGenreTable("")
        Actions.resetUserTable("")
        Actions.resetReviewTable("")
        Actions.resetUserReviewTable("")
    }

    render() {
        const data = this.state.animes.map(anime => {
            anime.Actions = <i className='fa fa-trash-alt delete-button' id={anime.anime_id} onClick={this.handleDelete} title='Delete' />

            return anime
        })

        return (
            <div>
                <div className='centered-row' style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <p className='table-title'>Anime Information</p>
                    <ResetButton onClick={this.handleReset} />    
                </div>

                <div className='centered-row'>
                    <img src={KH} alt='kingdom-hearts' />
                </div>

                <Table data={data} />
            </div>    
        )
    }
}