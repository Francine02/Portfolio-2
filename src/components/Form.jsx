import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Form() {
    const { t } = useTranslation()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    return (
        <div className='pr-6 md:pr-12 lg:pr-24 dark:text-white'>
            <h1 className='pt-2 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold dark:text-white text-center pb-10'><span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-[length:100%_3px] bg-no-repeat bg-bottom pb-1">{t('contato')}</span></h1>

            <form className='inline-table tracking-wide'>
                <input className='dark:bg-[#272727] w-full px-2 py-2 m-2 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]' type="text" placeholder={t('contact.name')} onChange={(e) => setName(e.target.value)} value={name} />

                <input className='dark:bg-[#272727] w-full px-2 py-2 m-2 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]' type="text" placeholder={t('contact.email')} onChange={(e) => setEmail(e.target.value)} value={email} />

                <textarea className='dark:bg-[#272727] w-full px-2 py-5  m-2 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]' placeholder={t('contact.messagem')} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

                <button className="px-2 py-2 m-2 w-full rounded-2xl from-indigo-600 via-pink-600 to-purple-600 bg-gradient-to-r hover:opacity-90 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <span className='font-bold'>{t('contact.enviar')}</span>
                </button>
            </form>

            <p className='text-center p-1 font-bold'>{t('contact.ou')}</p>

            <div className="flex justify-center ">
                <button className='text-2xl sm:text-3xl pt-2 pr-8 dark:text-white hover:opacity-80'><a href="https://github.com/Francine02" target="_blank"><i className="bi bi-github"></i></a></button>

                <button className='text-2xl sm:text-3xl pt-2 pr-8 dark:text-white hover:opacity-80'><a href="https://www.linkedin.com/in/francine-ccruz/" target="_blank"><i className="bi bi-linkedin"></i></a></button>

                <button className='text-2xl sm:text-3xl pt-2 dark:text-white hover:opacity-80'><a href="https://wa.me/5551986283397" target="_blank"><i className="bi bi-whatsapp"></i></a></button>
            </div>

        </div>
    )
}