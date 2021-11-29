import {Component} from 'react'; 
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/NavBar/Navbar';
import Button from './componentes/Button/Button';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>  
      <ItemListContainer/>
      
      </header>
    </div>
  );
} */

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {count : 0}
  }

  render() {
    const increment = () =>{
      this.setState ({
        count: this.state.count + 1
      })
    }

    const decrement = () => {
      this.setState ({
        count: this.state.count - 1
      })
    }

    const reset = () => {
      this.setState ({
        count: 0
      })
    }

    return (
      <div className="App">
        <Navbar/>
        <h1>{this.state.count}</h1>
        <img className="logo"src={"./images/LOGO-BI-SIN-FONDO.png"}  alt="logo img"/>
        <button className="button1" onClick={() => decrement()}>Decrementar</button>
        <button className="button1" onClick={() => reset()}>Resetear</button>
        <Button func={reset} label={'Reset'}/>
        <button className="button1" onClick={() => increment()}>Incrementar</button>
      </div>
    );
  }
}

export default App;
