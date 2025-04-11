import { useState } from "react"
import { Content } from "./Content"
import { IconHamburguer } from "./IconHamburguer"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex justify-between py-4 2xl:py-8 items-center">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">Francine</h1>

      <div className="hidden md:flex font-semibold items-center dark:text-white lg:text-lg">
        <Content />
      </div>

      <IconHamburguer isMenuOpen={isMenuOpen} open={() => setIsMenuOpen(!isMenuOpen)} />

      {isMenuOpen && (
        <div className="absolute top-16 pb-8 left-0 w-full bg-white dark:bg-[#272727] flex flex-col items-center space-y-4 md:hidden font-semibold dark:text-white text-lg sm:text-xl">
          <Content />
        </div>
      )}

    </header>
  )
}