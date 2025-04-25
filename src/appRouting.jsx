import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DebpouncePage from './pages/DebouncePage.jsx'
import ContextPage from './pages/ContextPage.jsx'
import DataTablePage from './pages/DataTablePage.jsx'

function AppRouting() {
  return (
    <React.Fragment>
        <Routes>
          <Route
            key={78288}
            path={'/'}
            element={<DebpouncePage />}
          />
          <Route
            key={78289}
            path={'/context'}
            element={<ContextPage />}
        />
          <Route
            key={78290}
            path={'/data-table'}
            element={<DataTablePage />}
        />
        </Routes>
    </React.Fragment>
  )
}

export default AppRouting