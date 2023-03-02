import React from 'react'

const Form = () => {
  return (
    <div>
        <form action="">
            <input type="email" placeholder='Email' id='email' /> <br />
            <input type="password" name="pass" id="pass" placeholder='Password' /> <br />
            <p id='fp'>Forgot password</p><br />
            <button id='login'>Login</button><br />
            <p>Dont have an account? <a href="">Signup</a></p><br />
            <p>-----------------Or-----------------</p><br />
            <button id='fb'>Login with Facebook</button><br />
            <button id='go'>Login with Google</button>
        </form>
    </div>
  )
}

export default Form