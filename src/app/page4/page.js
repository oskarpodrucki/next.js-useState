"use client";

import { useState } from "react";

export default function Page4() {
	const [color, setColor] = useState("red");
	const [input, setInput] = useState("");

	const handleColor = () => {
		setColor(input);
	};

	return (
		<div style={{ backgroundColor: color }} className='h-screen w-full'>
			<input
				className='bg-black text-white p-2'
				type='text'
				placeholder='type any color'
				onChange={(e) => setInput(e.target.value)}></input>
			<button className='bg-slate-900 text-blue-300 p-2 m-2' onClick={handleColor}>
				Change Color
			</button>
		</div>
	);
}
