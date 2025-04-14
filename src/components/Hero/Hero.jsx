import { useTranslation } from 'react-i18next'
import avatar from '../../assets/avatar.jpg'
import TypingAnimation from '../magicui/typing-animation'

export function Hero () {
    const {t} = useTranslation()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 xl:pt-0 2xl:pt-1 pb-24 sm:pb-36 items-center">
            <div className='pb-12 sm:pb-16 md:pb-0 text-center'>
                <p className='text-2xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium dark:text-white'>{t('resumo')}</p>
                
                <TypingAnimation className="pt-2 sm:pt-4 font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl" text="Francine Cruz"/>

                <p className='pt-2 sm:pt-4 text-lg sm:text-2xl md:text-xl lg:text-2xl font-medium dark:text-white'>{t('resumo-titulo')}</p>

                <button className='text-3xl sm:text-4xl pt-4 pr-8 dark:text-white hover:opacity-80'><a href="https://github.com/Francine02" target="_blank"><i className="bi bi-github"></i></a></button>

                <button className='text-3xl sm:text-4xl pt-4 pr-8 dark:text-white hover:opacity-80'><a href="https://www.linkedin.com/in/francine-ccruz/" target="_blank"><i className="bi bi-linkedin"></i></a></button>

                <button className='text-3xl sm:text-4xl pt-4 dark:text-white hover:opacity-80'><a href="https://wa.me/5551986283397" target="_blank"><i className="bi bi-whatsapp"></i></a></button>
            </div>

            <img src={avatar} alt="foto pessoal" className='w-80 sm:w-4/6 md:w-5/6 mx-auto 2xl:w-4/6'/>
        </div>
    )
}