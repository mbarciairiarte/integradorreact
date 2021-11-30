import React, {useState} from 'react';
import "./ItemCount.css"

function countInicial () {
  console.log('iniciando contador')
  return 0
}

function ItemCount (){

  const [count, setCount] = useState (() =>countInicial())

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount () {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button className= "buttonWrapper" onClick= {decrementCount}>-</button>
      <span>{count}</span>
      <button className= "buttonWrapper" onClick= {incrementCount}>+</button>
    </>
  )
}

export default ItemCount
/* 
const {useState} = 'react';


function ItemCount (){
const [count, setCount] = useState(0);

return(
  <div className= "itemCount">
    <h1>{count}</h1>
      <div className="button-wrapper">
         <button onClick = {() => setCount(count-1)}>-</button>
         <button onClick = {() => setCount(count+1)}>+</button>
      </div>
  </div>
);

}

export default ItemCount */

