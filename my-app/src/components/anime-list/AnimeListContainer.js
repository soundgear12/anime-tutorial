import React, { Component } from 'react';
import AnimeStore from '../../stores/AnimeStore';
import Actions from '../../actions';
import SpriteList from './SpriteList';
import LoadingBar from '../loader/LoadingBar';

export default class AnimeListContainer extends Component {
    state = {
        animes: [],
        loading: true
    }

    componentDidMount() {
        AnimeStore.listen(this.onChange);
        Actions.getAnimes("");

        setTimeout(() => {
            this.setState({ loading: false })
        }, 1500);
    }

    onChange = store => {
        const { animes } = store;
        this.setState({ animes });
    }

    componentWillUnmount() {
        AnimeStore.unlisten(this.onChange);
    }

    render() {
        if (this.state.loading) {
            return <LoadingBar />
        }

        return (
            <div>
                <SpriteList data={this.state.animes} />
            </div>
        )
    }
}