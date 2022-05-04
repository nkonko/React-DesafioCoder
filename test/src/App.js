// <ItemListContainer greeting="Hola!" /> con esto envio lo que quiero que se escriba donde esta el H1 de las props.

import "./App.css";
import ItemListContainer from "./ItemListContainer"; //Me traigo el componente ItemListContainer
import NavBar from "./NavBar"; //Me traigo el componente Navbar

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola!" />
    </div>
  );
}

export default App;
