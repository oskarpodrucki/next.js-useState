'use client'
import { useState } from "react"

export default function Page5(){

    const [table, setTable] = useState(["marek", "bartek", "maciek"])

    const [input, setInput] = useState("")

    const addName = () => {
        if (input.trim()) { 
            setTable([...table, input])
            setInput("")
        }
    }

    return (
        <div>
            <h1>siema</h1>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                placeholder="write name here" 
            />
            <button onClick={addName}>add name</button>
            <ol>
                {table.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ol>
        </div>
    )
}