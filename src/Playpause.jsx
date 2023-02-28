import React,{useState,useRef} from 'react'
import VIDEO from "./video.mp4"

const Playpause = () => {
    let [video,setVideo]=useState(VIDEO)
    let videoRef=useRef()
    let [play,setPlay]=useState(false)

    let handleChange=()=>{
        if (!play)
        {
            setPlay(true)
            videoRef.current.play()
        }
        else{
            setPlay(false)
            videoRef.current.pause()
        }
    }
  return (
    <div>
        <video ref={videoRef} src={video} onClick={handleChange}></video>
    </div>
  )
}

export default Playpause