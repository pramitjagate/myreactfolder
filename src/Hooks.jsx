import React from 'react'
import { useState } from 'react';

const Hooks = () => {

    const[userName, setUserName] = useState("sam");
    const[phone, setPhone] = useState(1313131);
  return (
    <div>
        <h1>{userName}</h1>
        <h1>{phone}</h1>
        <button onClick={()=>{
            setUserName("ram")
        }}>click</button>
    </div>
  )
}

export default Hooks