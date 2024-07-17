import { useTranslation } from 'react-i18next'
import ShineBorder from "../@/components/magicui/shine-border.jsx" //Efeito pego no Magic UI
import { IconCloud } from '../components/IconCloud.jsx'

export function About ()  {
    const {t} = useTranslation()

    return (
        <ShineBorder className=" mx-7 sm:mx-12 lg:mx-24 dark:bg-[#272727] p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" color={["#4F46E5", "#DB2777", "#9333EA"]}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div>
                    <h1 id="sobre" className='pt-6 text-2xl sm:text-3xl md:text-4xl font-semibold dark:text-white text-center pb-10'><span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-[length:100%_3px] bg-no-repeat bg-bottom pb-1">{t('sobre-secao')}</span></h1>

                    <div className='text-justify dark:text-white'>
                        <p className='font-medium cursor-text text-base sm:text-lg tracking-wide'>{t('sobre-secao-resumo')} 
                            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'>{t('sobre-secao-resumo2')}</span> 
                            {t('sobre-secao-resumo3')} 
                            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'> HTML5, CSS3, JavaScript, React, Java, Node.js</span> 
                            {t('sobre-secao-resumo4')}
                            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'>Figma.</span></p>
                    </div>
                </div>

                <IconCloud/>
            </div>

        </ShineBorder>
    )
}