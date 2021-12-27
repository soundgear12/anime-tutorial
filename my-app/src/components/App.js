import React, { Component } from 'react';
import Table from "./Table.js"

export default class App extends Component {
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
            <Table data={this.state.data} />
        )
    }
}