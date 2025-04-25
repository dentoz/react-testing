import React, { createContext } from 'react'
import TableComponent from '../components/TableComponent';

const dummyData = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Sam Johnson', age: 45 },
    { id: 4, name: 'Chris Lee', age: 23 },
    { id: 5, name: 'Pat Taylor', age: 30 },
]

export const DataContext = createContext(dummyData);

function DataTablePage() {
    const [data, setData] = React.useState(dummyData)

    return (
        <DataContext.Provider value={{defaultData: dummyData, data, setData}}>
            <TableComponent />
        </DataContext.Provider>
    )
}

export default DataTablePage