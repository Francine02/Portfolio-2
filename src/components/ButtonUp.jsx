import up from '../assets/buttondark.png'

export function ButtonUp () {
    const toggleScrollUp = () => { //Função para quando o botão for clicado a página volte para cima
        window.scroll({
            top: 0,
            behavior: "smooth"
          });
    }
    return (
        <div id='button' className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 hover:opacity-95 p-1 w-10 h-10 md:w-12 md:h-12 rounded-full fixed bottom-4 right-5 md:right-8 md:bottom-7 lg:right-12 cursor-pointer shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" style={{display: window.scrollY > 100 ? 'block' : 'none'}} onClick={toggleScrollUp}>
            <img src={up} alt="para cima" />
        </div>
    )
}