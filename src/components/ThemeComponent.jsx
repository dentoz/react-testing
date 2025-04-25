import React, { useContext } from "react";
import { ThemeContext } from "../pages/ContextPage";

function ThemeComponent() {
  const {theme, handleChangeTheme} = useContext(ThemeContext);
  return (
    <React.Fragment>
        <div>Theme is : {theme}</div>
        <button onClick={handleChangeTheme}>Change Theme</button>
    </React.Fragment>
  )
}

export default ThemeComponent;
