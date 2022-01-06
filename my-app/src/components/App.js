import React, { Component } from 'react';
import TableContainer from './anime-table/TableContainer';
import AnimeForm from './anime-form/AnimeForm';
import AnimeListContainer from './anime-list/AnimeListContainer';
import UserListContainer from './user-list/UserListContainer';
import MenuBar from './navbar/MenuBar';
import history from '../history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <MenuBar />
                <Routes>
                    <Route exact path="/home" element={<TableContainer />} />
                    <Route exact path="/add" element={<AnimeForm />} />
                    <Route exact path="/list" element={<AnimeListContainer />} />
                    <Route exact path="/users" element={<UserListContainer />} />
                </Routes>
            </BrowserRouter>
        )
    }
}