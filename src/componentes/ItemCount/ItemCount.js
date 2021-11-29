import { Component } from 'react'
/* import './App.css'; */
import Button from '../Button/Button'

class ItemCount extends Component {
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
        <div className="itemCount">
          <h1>{this.state.count}</h1>
{/*           <img className="logo"src={"./images/LOGO-BI-SIN-FONDO.png"}  alt="logo img"/> */}
          <button onClick={() => decrement()}>Decrementar</button>
          <button onClick={() => reset()}>Resetear</button>
          <Button func={reset} label={'Reset'}/>
          <button onClick={() => increment()}>Incrementar</button>
        </div>
      );
    }
  }

export default ItemCount

