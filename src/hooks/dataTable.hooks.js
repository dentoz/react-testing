import { useContext } from "react"
import { DataContext } from "../pages/DataTablePage"

export const useDataTable = () => {
    const {defaultData, data, setData} = useContext(DataContext)

    const handleSorting = (sortBy) => {
        const sorted = data.sort((a, b) => sortBy === 'asc' ? a.age - b.age : b.age - a.age);
        setData([...sorted]);
    }

    const handleFiltering = (filterBy) => {
        const filtered = data.filter(item => item.name.toLowerCase().includes(filterBy.toLowerCase()));
        setData([...filtered]);
    }

    const setNewData = (newData) => {
        setData(newData);
    }

    const setToDefaultData = () => {
        setData(defaultData);
    }

    return {
        data,
        handleSorting,
        handleFiltering,
        setToDefaultData,
        setNewData
    }
}