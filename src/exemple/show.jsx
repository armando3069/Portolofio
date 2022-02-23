import React,{useContext} from 'react'
import Button from './button'
import { countContext } from '../context/context'

function show() {

    const {count,login} = useContext(countContext);

  return (
    <div>
       {login ? <h1>Tu esti logat</h1> : <h1>Ne logat</h1> }
      <h1>{count}</h1> 
    </div>
  )
}

export default show