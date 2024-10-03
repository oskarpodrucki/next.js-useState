'use client'
import { useState } from "react"
import Link from "next/link"

export default function Page1(){
    const [number, SetNumber] = useState(0)

    const addNumber = () => {
        SetNumber(number + 1)
    }

    const subNumber = () => {
        SetNumber(number - 1)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <Link className="text-blue-900" href="/">Strona Główna</Link>
            <h1>Strona 1</h1>
            <h1 className="text-[50px]">{number}</h1>
            <button className="bg-slate-900 text-blue-300 p-2 rounded" onClick={addNumber}>Add Number</button>
            <button className="bg-slate-900 text-blue-300 p-2 rounded" onClick={subNumber}>Sub Number</button>
        </div>
    )
}