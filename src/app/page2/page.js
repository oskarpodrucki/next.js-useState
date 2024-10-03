"use client"
import { useState } from "react"

export default function Page2(){

    const [option, SetOption] = useState(0)
    const [text, SetText] = useState("Start")

    const handleOption = () => {
        
        if(option == 0){
            SetOption(option + 1)
            SetText("Stop")
        }else{
            SetOption(option - 1)
            SetText("Start")
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1>{text}</h1>
            <button onClick={handleOption}>Change text</button>
        </div>
    )
}