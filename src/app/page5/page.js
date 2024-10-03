'use client'

import { useState } from "react"

export default function Page5() {
    const [table, setTable] = useState(["marek", "bartek", "maciek"])
    const [input, setInput] = useState("")

    const addName = () => {
        if (input.trim()) { 
            setTable([...table, input])
            setInput("") 
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <h1 className="text-lg font-bold">Siema</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write name here"
                className="p-2 border rounded"
            />
            <button
                onClick={addName}
                className="bg-slate-900 text-blue-300 p-2 rounded"
            >
                Add Name
            </button>
            <ol className="list-decimal p-4">
                {table.map((name, index) => (
                    <li key={index} className="py-1">{name}</li>
                ))}
            </ol>
        </div>
    )
}
