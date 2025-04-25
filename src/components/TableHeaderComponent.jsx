import React from "react";

function TableHeaderComponent({
  data,
  handleSorting,
  handleFiltering,
  setToDefaultData
}) {
  const [sortingType, setSortingType] = React.useState("asc");
  const [filterValue, setFilterValue] = React.useState("");
  const [debounceValue, setDebounceValue] = React.useState("");

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(filterValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [filterValue]);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="table-header">
      <h2>Data Table</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <select onChange={(e) => setSortingType(e.target.value)} value={sortingType}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <button onClick={() => handleSorting(sortingType)}>Sort by Age</button>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Filter by Name"
            onChange={handleFilterChange}
          />
          <button onClick={() => handleFiltering(debounceValue)}>
            Filter by Name
          </button>
        </div>
        <button style={{ maxWidth: 150 }} onClick={() => setToDefaultData()}>Reset to Default</button>
      </div>
      <p>Total Records: {data.length}</p>
    </div>
  );
}

export default TableHeaderComponent;
