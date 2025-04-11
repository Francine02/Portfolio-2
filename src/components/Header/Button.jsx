import { useTranslation } from 'react-i18next'

export function Button() {
    const { t } = useTranslation()

    return (
        <a href="#contato">
            <button className="p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
                <span className={`block px-4 py-1 md:py-2 font-semibold rounded-full bg-white text-black hover:bg-transparent hover:text-white transition dark:bg-[#272727] dark:text-white dark:hover:bg-transparent dark:hover:text-white`}>
                    {t('contato')}
                </span>
            </button>
        </a>
    )
}