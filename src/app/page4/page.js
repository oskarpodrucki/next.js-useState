'use client'

import { useState } from "react"

export default function Page4() {
    const [color, setColor] = useState("red")

    const handleColor = () => {
        setColor(color)
    }

    return (
        <div className={`h-screen w-full bg-${color}-500`}>
            <h1 className="text-green-500">Siema</h1>
            <input
                type="text"
                onChange={(e) => setColor(e.target.value)}
                placeholder="Type a color"
                className="p-2 rounded"
            />
            <p>{color}</p>
        </div>
    )
}
