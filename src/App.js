import './App.css';
import ItemListContainer from './componentes/Items/ItemListContainer';
import Navbar from './componentes/NavBar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
     
      <Navbar/>  
      <ItemListContainer greeting={"Hola"} classItemListContainer = "ItemListContainer"/>
      <ItemDetailContainer/>

     
    </div>
  );
}

export default App;
