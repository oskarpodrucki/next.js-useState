import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-center items-center w-full bg-black py-4">
            <Link className="text-blue-300 underline mx-2" href="/">Główna</Link>
            <Link className="text-blue-300 underline mx-2" href="/page1">Strona 1</Link>
            <Link className="text-blue-300 underline mx-2" href="/page2">Strona 2</Link>
            <Link className="text-blue-300 underline mx-2" href="/page3">Strona 3</Link>
            <Link className="text-blue-300 underline mx-2" href="/page4">Strona 4</Link>
            <Link className="text-blue-300 underline mx-2" href="/page5">Strona 5</Link>
        </div>
    );
}
