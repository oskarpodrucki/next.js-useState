'use client'

import { useState } from "react"

export default function Page3() {
    const [color, setColor] = useState("white")

    const colorHandler = () => {
        setColor(color === "white" ? "black" : "white")
    }

    return (
        <div className={`flex flex-col justify-center items-center h-screen gap-5 bg-${color}`}>
            <h1 className="text-green-600">siema</h1>
            <button
                onClick={colorHandler}
                className="text-green-600"
            >
                Switch Theme
            </button>
        </div>
    )
}
