import React from 'react'
import {useNavigate} from 'react-router-dom'

const Account = (props ) => {
    let nav = useNavigate()
    const lS = JSON.parse(localStorage.getItem("ls"));
let value=[]
    lS.map((val)=>{value.push(val.uid)})
    console.log(value)
    function operation() {
      props.refr(false)
    nav('/login')
    }
  return (
    <div>
      <p className="titleCag" style={{marginTop:'120px'}}>My Account</p>
      <div> <p >{value[0]}</p><p style={{cursor:"pointer"}} onClick={()=>operation()}>logout</p></div>
    </div>
  )
}

export default Account
