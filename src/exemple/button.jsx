import React,{useContext} from 'react'
import { countContext } from '../context/context'

function button(props) {
    const {setCount,setLogin,login} = useContext(countContext)
   return (
    <div>
        <button onClick={()=>{setCount((count)=> count-1)}}>remove</button>
        <button onClick={()=>{ setLogin((!login)) , setCount((count)=>count+1) }}>{login ? 'logOut' : 'LogIn'}</button>
    </div>
  )
}

export default button