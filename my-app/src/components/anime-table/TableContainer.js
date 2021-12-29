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

    render() {
        console.log(this.state)

        return (
            <div>
                <div className='centered-row' style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <p className='table-title'>Anime Information</p>
                    <ResetButton onClick={() => console.log("reset button clicked!")} />    
                </div>

                <div className='centered-row'>
                    <img src={KH} alt='kingdom-hearts' />
                </div>

                <Table data={this.state.animes} />
            </div>    
        )
    }
}