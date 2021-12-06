import React, {useState} from 'react';

function countInicial () {
  console.log('iniciando contador')
  return 0
}

function ItemCount (){

  const [count, setCount] = useState (() =>countInicial())

  function decrementCount(){
    if (count >= 1){
    setCount(prevCount => prevCount - 1)
  }}

  function incrementCount () {
    if (count <= 9 ){
    setCount(prevCount => prevCount + 1)
  }}

  return (
    <>
      <button className= "buttonWrapper" onClick= {incrementCount}>+</button>
      <span>{count}</span>
      <button className= "buttonWrapper" onClick= {decrementCount}>-</button>
    </>
  )
}

export default ItemCount

