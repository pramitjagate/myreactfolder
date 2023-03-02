import React from 'react'

const Signuoform = () => {
  return (
    <div>
    <form action="">
        <input type="email" placeholder='Email' id='email' /> <br />
        <input type="password" name="createpass" id="createpasspass" placeholder='CreatePassword' /> <br />
        <input type="password" name="confirmpass" id="confirmpass" placeholder='ConfirnPassword' /> <br />
        <button id='login'>Signup</button><br />
        <p>Already have an account? <a href="">Login</a></p><br />
        <p>-----------------Or-----------------</p><br />
        <button id='fb'>Login with Facebook</button><br />
        <button id='go'>Login with Google</button>
    </form>
</div>
  )
}

export default Signuoform