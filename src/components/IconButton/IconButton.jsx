export function IconButton({href, icon}) {
    return (
        <button className='text-3xl sm:text-4xl pt-4 pr-8 dark:text-white hover:opacity-80'>
            <a href={href}
                target="_blank">
                <i className={icon}></i>
            </a>
        </button>
    )
}