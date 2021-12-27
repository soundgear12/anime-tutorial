import React from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

const Table = ({ data }) => {
    const firstRow = data[0]
    const columns = []

    for (let key in firstRow) {
        columns.push({ Header: key, accessor: key })
    }

    return (
        <ReactTable
            className="-striped -highlight"
            data={data}
            columns={columns}
            defaultPageSize={100}
        />    
    )
}

export default Table