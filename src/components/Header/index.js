import Link from "next/link";

export default function Header(){
    return (
        <div className="flex justify-center w-[100%] bg-black">
            <Link className="text-blue-300 underline" href="/">Główna</Link>
            <Link className="text-blue-300 ml-2 underline" href="/page1">Strona 1</Link>
            <Link className="text-blue-300 ml-2 underline" href="/page2">Strona 2</Link>
            <Link className="text-blue-300 ml-2 underline" href="/page3">Strona 3</Link>
            <Link className="text-blue-300 ml-2 underline" href="/page4">Strona 4</Link>
            <Link className="text-blue-300 ml-2 underline" href="/page5">Strona 5</Link>
        </div>
    )
}