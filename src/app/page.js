import NameList from "@/components/NameList"
import Link from "next/link"

export default function Home() {
  const names = [
    { imie: "oskar podrucki", pay: "yes", ok: true },
    { imie: "mateusz radzikowski", pay: "yes", ok: true },
    { imie: "bartosz piętka", pay: "no", ok: true },
    { imie: "jakub karaban", pay: "no", ok: false },
    { imie: "marek mostowiak", pay: "no", ok: true },
    { imie: "kazimierz wielki", pay: "yes", ok: false },
    { imie: "kanye west", pay: "no", ok: true },
    { imie: "kendrick lamar", pay: "no", ok: false },
    { imie: "lionel messi", pay: "yes", ok: true },
  ]

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <Link className="text-blue-800" href="/page1">Strona 1</Link>
      <h1>Strona główna</h1>

      {/* Przykład ręcznego przekazywania propsów do NameList */}
      <NameList name="oskarpodrucki" pay="no" ok={true} />
      <NameList name="oskarpodrucki" pay="no" />
      <NameList name="oskarpodrucki" ok={true} />
      <NameList name="oskarpodrucki" />

      <hr className="w-1/2 border-t-2 border-gray-300" />

      {/* Iteracja po tablicy names i renderowanie komponentów NameList */}
      {names.map(({ imie, pay = "no", ok = false }, idx) => (
        <NameList key={idx} name={imie} pay={pay} ok={ok} />
      ))}
    </div>
  )
}
