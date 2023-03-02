import React,{useState} from 'react'

const Controlformfbc = () => {
    let[userName,setUsername]=useState("")
    let[password,setPassword]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({userName,password});
    }
  return (
    <div>
    <form action="">
        <label htmlFor="userName">USERNAME:</label>
        <input type="text" id='userName' onChange={(e)=>{
            setUsername({userName:e.target.value})
        }}/>
        <br />
        <label htmlFor="password">PASSWORD: </label>
        <input type="text" id='password' onChange={(e)=>{
            setPassword({password:e.target.value})
        }}/>
        <br />
        <button onClick={handleSubmit}>SUBMIT</button>
    </form>


  </div>
  )
}

export default Controlformfbc