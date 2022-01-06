import React from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Loadingbar from '../loader/LoadingBar'

const Table = ({ data }) => {
    if (!data || !data[0]) {
        return <Loadingbar />
    }

    const columns = Object.keys(data[0]).map(key => {
        return { Header: key, accessor: key }
    })

    return (
        <ReactTable
            className="-striped -highlight anime-table"
            data={data}
            columns={columns}
            defaultPageSize={100}
        />    
    )
}

export default Table