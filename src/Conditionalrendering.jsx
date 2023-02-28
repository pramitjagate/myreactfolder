import React,{useState} from 'react'

const Conditionalrendering = () => {

    let [authenticUser,setAuthenticUser]=useState(false)

    let AcceptedUser=()=>{
        return(
            <>
        <nav>
            <ol>
                <li>menu</li>
                <li>search</li>
            </ol>
        </nav>
        <div>homepage</div>
        </>
        )
    }

    let NotAcceptedUser=()=>{
        return(
            <>
        <nav>
            <ol>
                <li>forgot password</li>
                <li>recover</li>
            </ol>
        </nav>
        <div>back to login page</div>
        </>
        )
    }
  return<> {authenticUser?<AcceptedUser/> : <NotAcceptedUser/>} </>

}

export default Conditionalrendering