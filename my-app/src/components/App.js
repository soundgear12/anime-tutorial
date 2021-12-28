import React, { Component } from 'react';
import TableContainer from './anime-table/TableContainer';
import Table from './anime-table/Table';
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
                    <Route exact path="/test"  element={<Table />} />
                </Routes>
            </BrowserRouter>
        )
    }
}