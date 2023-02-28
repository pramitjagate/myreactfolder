import React,{useRef, useState} from 'react'

const Refsfbc = () => {
    let[img,setImage]=useState("https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210__340.jpg")
    let imgRef=useRef("")
    let btnRef=useRef("")

    let changeBorder=()=>{
        imgRef.current.style.border="2px solid red"
        btnRef.current.style.background="red"
    }
  return (
    <div>
        <img src={img} alt="" ref={imgRef} />
        <button onClick={changeBorder} ref={btnRef}>Change Border</button>


    </div>
  )
}

export default Refsfbc