import { useTranslation } from 'react-i18next'
import ShineBorder from "../@/components/magicui/shine-border.jsx" //Efeito pego no Magic UI
import { IconCloud } from '../components/IconCloud.jsx'

export function About() {
    const { t } = useTranslation()

    return (
        <ShineBorder className=" mx-7 sm:mx-12 lg:mx-24 2xl:mx-72 dark:bg-[#272727] p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" color={["#4F46E5", "#DB2777", "#9333EA"]}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>
                <div>
                    <h1 id="sobre" className='text-2xl sm:text-3xl md:text-4xl font-semibold dark:text-white text-center pb-10'><span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-[length:100%_3px] bg-no-repeat bg-bottom pb-1">{t('sobre/secao.sobre')}</span></h1>

                    <div className=' dark:text-white'>
                        <p className='font-medium text-base sm:text-lg 2xl:text-xl tracking-wide pb-2'>
                            {t('sobre/secao.resumo')}
                        </p>
                        <p className='font-medium cursor-text text-base sm:text-lg 2xl:text-xl tracking-wide'>
                            {t('sobre/secao.resumo1')}
                            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'>
                                {t('sobre/secao.resumo2')}
                            </span>
                            {t('sobre/secao.resumo3')}
                            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'>
                                {t('sobre/secao.tecnologias')}
                            </span>

                        </p>

                        <p className='font-medium text-base sm:text-lg 2xl:text-xl tracking-wide pt-2'>
                            {t('sobre/secao.resumo4')}
                            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'>
                                {t('sobre/secao.resumo-soft-skills')}
                            </span>
                            {t('sobre/secao.resumo4-1')}
                        </p>
                    </div>

                </div>

                <IconCloud />
            </div>

        </ShineBorder>
    )
}