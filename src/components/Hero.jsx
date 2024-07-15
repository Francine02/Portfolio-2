import { useTranslation } from 'react-i18next'
import avatar from '../assets/avatar.png'

export function Hero () {
    const {t} = useTranslation()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-14 xl:pt-0 items-center">
            <div className='pb-6 text-center'>
                <p className='text-2xl lg:text-3xl font-medium dark:text-white'>{t('resumo')}</p>

                <p className='font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 text-5xl lg:text-6xl xl:text-7xl'>Francine Cruz</p>

                <p className='text-base lg:text-lg xl:text-xl font-medium dark:text-white'>{t('resumo-titulo')}</p>

                <button className='text-3xl lg:text-4xl pt-4 pr-8 dark:text-white hover:opacity-80'><a href="https://github.com/Francine02" target="_blank"><i className="bi bi-github"></i></a></button>

                <button className='text-3xl lg:text-4xl pt-4 pr-8 dark:text-white hover:opacity-80'><a href="https://www.linkedin.com/in/francine-ccruz/" target="_blank"><i className="bi bi-linkedin"></i></a></button>

                <button className='text-3xl lg:text-4xl pt-4 dark:text-white hover:opacity-80'><a href="https://wa.me/5551986283397" target="_blank"><i className="bi bi-whatsapp"></i></a></button>
            </div>

            <img src={avatar} alt="foto pessoal" className='w-72 md:w-96 xl:w-5/6 mx-auto'/>
        </div>
    )
}