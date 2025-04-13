export function Link({link, text, rel, target}) {
    return (
        <a
            href={link}
            rel={rel}
            target={target}
            className="text-base md:text-lg md:pr-7 lg:pr-10 cursor-pointer hover:leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-pink-600 hover:to-purple-600">
            {text}
        </a>

    )
}