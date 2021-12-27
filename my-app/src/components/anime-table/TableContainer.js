import React, { Component } from 'react';
import Table from "./Table"
import ResetButton from './ResetButton';
import KH from '../../res/gifs/KH.gif'

export default class TableContainer extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/getAllAnime')
            .then(res => res.json())
            .then(json => {
                this.setState({data: json})
            })
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

                <Table data={this.state.data} />
            </div>    
        )
    }
}