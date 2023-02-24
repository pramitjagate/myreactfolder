import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <>
    <div>
        <ToastContainer />
        Toast
        <button onClick={()=>{
            toast.success("completed")
            toast.warning("alert")
            toast.error("fail")
        }}>SUCCESS</button>
        </div>
        <div>
        <ToastContainer />
        Toast
        <button onClick={()=>{
            toast.success("completed",{
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }}>SUCCESS</button>
        </div>
        </>

  )
}

export default Toast