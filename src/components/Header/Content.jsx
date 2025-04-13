import { useTranslation } from 'react-i18next'
import { Button } from "./Button"
import { Link } from "./Link"
import { ToggleLanguage } from "./ToggleLanguage"
import { ToggleTheme } from "./ToggleTheme"

export function Content() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <Link text={t('sobre')} link={"#sobre"} />
            <Link text={t('projetos')} link={"#projetos"} />
            <Link text={"CV"} link={i18n.language === 'pt' ? "/CV - Francine Cruz-pt.pdf" : "/CV - Francine Cruz-en.pdf"} target="_blank" rel="noopener noreferrer" />

            <div className='pt-2'>
                <ToggleTheme />
                <ToggleLanguage />
            </div>

            <Button />
        </>
    )
}