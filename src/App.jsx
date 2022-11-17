import Header from "./components/Header";
import Main from "./components/Main";

// usable components 
import Search from "./components/Search";
import Filter from "./components/Filter";
import Country from "./components/Country";
import PaginationButton from "./components/PaginationButton";

import { ThemeContext } from "./context/ThemeContext"
import { useState } from "react";



function App() {

  const [theme, setTheme ] = useState("dark")

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" id={theme}>
        <Header/>
        <Main search={Search} filter={Filter} country={Country} paginationBTN={PaginationButton}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
