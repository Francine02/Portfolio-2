import { useState, useEffect } from "react"
import dark from '../assets/dark.png'
import light from '../assets/light.png'

export function Header () {
    const[isMenuOpen, setIsMenuOpen] = useState(false) //Para controlar o estado do menu hamburguer. Caso o tamanho da tela chega a um determinado tamanho, as opções do menu são escondidas, no lugar aparece o menu hamburguer e o useState controla se ele está aberto, daí aporece as opções, ou está fechado.
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
      }) //Tenta obter o valor do darkMode e se for true ele inicializa assim, se não é ao contrario
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }
    
      const toggleDarkMode = () => { //Altera o darkMode
        const newDarkMode = !isDarkMode //Aqui ele cria uma nova variável inversa ao valor referente ao isDarkMode
        setIsDarkMode(newDarkMode) //Atualiza o estado do darkMode com a variável de cima
        if (newDarkMode) { //Dependendo do valor ele adiciona ou remove a classe dark
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', newDarkMode) //Armazena o novo valor do isDarkMode
      }
    
      useEffect(() => { //Efeito para aplicar o darkMode ou remover com base em seu valor no if
        if (isDarkMode) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }, [isDarkMode])

    return (
        <div className="flex justify-between py-4 items-center">
            <h1 className=" text-xl md:text-2xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">Francine</h1>

            <div className="hidden md:flex font-semibold items-center dark:text-white">
                <a className="pr-7 cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Início</a>
                <a className="pr-7 cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Sobre</a>
                <a className="pr-7 cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Projetos</a>
                
                <button onClick={toggleDarkMode} className="mr-7 hover:opacity-70"><img src={isDarkMode ? light : dark} alt="dark/light mode" className="w-6"/></button>

                <button className="p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
                    <span className={`block px-4 py-2 font-semibold rounded-full bg-white text-black hover:bg-transparent hover:text-white transition dark:bg-[#1d1d1d] dark:text-white dark:hover:bg-transparent dark:hover:text-white`}>Contato</span>
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
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#1d1d1d] flex flex-col items-center space-y-4 md:hidden font-semibold dark:text-white">
                    <a className="cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Início</a>
                    <a className="cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Sobre</a>
                    <a className="cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">Projetos</a>
                    
                    <div>
                        <button onClick={toggleDarkMode} className="mr-12"><img src={isDarkMode ? light : dark} alt="dark/light mode" className="w-6"/></button>
                        
                    </div>

                    <button className="p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
                        <span className={`block px-4 py-2 font-semibold rounded-full bg-white text-black hover:bg-transparent hover:text-white transition dark:bg-[#1d1d1d] dark:text-white dark:hover:bg-transparent dark:hover:text-white`}>Contato</span>
                    </button>
                </div>
            )}

        </div>
    )
}