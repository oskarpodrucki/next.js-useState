"use client"

export default function NameList({ name, pay = "yes", ok }) {
    return (
        <div className={`flex justify-center w-[50%] border ${ok ? 'bg-black' : ''}`}>
            <h1 className={`${pay === "no" ? 'text-red-500' : 'text-emerald-500'}`}>{name}</h1>
        </div>
    );
}

