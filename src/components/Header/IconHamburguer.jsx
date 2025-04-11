
export function IconHamburguer({ open, isMenuOpen }) {

    return (
        <button onClick={open} className="focus:outline-none md:hidden">
            <svg className="w-6 h-6 text-black dark:text-white"
                fill="none" stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}>
                </path>
            </svg>
        </button>
    )
}