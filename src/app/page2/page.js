'use client'

import { useState } from "react"

export default function Page2() {
    const [option, setOption] = useState(0)
    const [text, setText] = useState("Start")

    const handleOption = () => {
        if (option === 0) {
            setOption(option + 1)
            setText("Stop")
        } else {
            setOption(option - 1)
            setText("Start")
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1>{text}</h1>
            <button
                className="bg-slate-900 text-blue-300 p-2 rounded"
                onClick={handleOption}
            >
                Change text
            </button>
        </div>
    )
}
