import { useState } from "react"

export function Header () {
    const[isMenuOpen, setIsMenuOpen] = useState(false) //Para controlar o estado do menu hamburguer. Caso o tamanho da tela chega a um determinado tamanho, as opções do menu são escondidas, no lugar aparece o menu hamburguer e o useState controla se ele está aberto, daí aporece as opções, ou está fechado.

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="flex justify-between py-4 items-center">
            <h1 className=" text-xl md:text-2xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">Francine</h1>

            <div className="hidden md:flex font-semibold items-center">
                <a className="pr-7 cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Início</a>
                <a className="pr-7 cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Sobre</a>
                <a className="pr-7 cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Projetos</a>
                <button class="p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
                    <span class="block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">Contato</span>
                </button>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 md:hidden font-semibold">
                    <a className="cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Início</a>
                    <a className="cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Sobre</a>
                    <a className="cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Projetos</a>
                    <button class="m-4 p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
                        <span class="block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">Contato</span>
                    </button>
                </div>
            )}

        </div>
    )
}