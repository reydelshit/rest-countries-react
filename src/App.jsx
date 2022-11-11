import Header from "./components/Header";
import Main from "./components/Main";

// usable components 
import Search from "./components/Search";
import Filter from "./components/Filter";
import Country from "./components/Country";
import PaginationButton from "./components/PaginationButton";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main search={Search} filter={Filter} country={Country} paginationBTN={PaginationButton}/>
    </div>
  );
}

export default App;
