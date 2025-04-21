import { useTranslation } from 'react-i18next'
import avatar from '../../assets/avatar.png'
import TypingAnimation from '../magicui/typing-animation'
import { IconButton } from '../IconButton/IconButton'

export function Hero() {
    const { t } = useTranslation()

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 pt-20 xl:pt-0 2xl:pt-1 pb-24 sm:pb-36 items-center">
            <div className='pb-12 sm:pb-16 md:pb-0 text-center'>
                <p className='text-2xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium dark:text-white'>{t('resumo')}</p>

                <TypingAnimation className="pt-2 sm:pt-4 font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl" text="Francine Cruz" />

                <p className='pt-2 sm:pt-4 text-lg sm:text-2xl md:text-xl lg:text-2xl font-medium dark:text-white'>{t('resumo-titulo')}</p>

                <IconButton icon="bi bi-github" href="https://github.com/Francine02" />
                <IconButton icon="bi bi-linkedin" href="https://www.linkedin.com/in/francine-ccruz/" />
                <IconButton icon="i bi-whatsapp" href="https://wa.me/5551986283397" />
            </div>

            <img src={avatar} alt="foto pessoal" className='w-80 sm:w-4/6 md:w-5/6 mx-auto 2xl:w-4/6' />
        </section>
    )
}