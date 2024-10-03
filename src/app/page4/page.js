'use client'
import { useState } from "react"

export default function Page4(){

    const [color, SetColor]  = useState("red")

    const handleColor = () => {
        
        setColor(color)

    }

    return (
        <div className={`h-screen w-full bg-${color}-500`}>
            <h1 className="text-green-500">Siema</h1>
            <input type="text" onChange={(e) => SetColor(e.target.value)} placeholder="Type a color" />
            <p>{color}</p>
        </div>
    )
}