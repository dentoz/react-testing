import React from "react";
import { useDataTable } from "../hooks/dataTable.hooks";
import TableHeaderComponent from "./TableHeaderComponent";

function TableComponent() {
  const { data, handleSorting, handleFiltering, setToDefaultData, setNewData } = useDataTable();

  const handleInlineInput = (field, fieldIndex) => (e) => {
    const newValue = e.target.value;
    setNewData((prevData) =>
      prevData.map((item, index) => {
        return index === fieldIndex ? { ...item, [field]: newValue } : item
      })
    );
  }

  return (
    <React.Fragment>
      <TableHeaderComponent data={data} handleSorting={handleSorting} handleFiltering={handleFiltering} setToDefaultData={setToDefaultData} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><input value={item.name} onChange={handleInlineInput('name', index)} /></td>
              <td><input value={item.age} onChange={handleInlineInput('age', index)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TableComponent;
