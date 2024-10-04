'use client'

export default function NameList({ name, pay = "yes", ok }) {
    return (
        <div className={`flex justify-center items-center h-[20px] w-[500px] border p-4 ${ok ? 'bg-black' : 'bg-white'}`}>
            <h1 className={`${pay === "no" ? 'text-red-500' : 'text-emerald-500'} text-xl`}>{name}</h1>
        </div>
    );
}
