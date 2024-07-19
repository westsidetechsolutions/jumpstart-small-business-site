type LinkButtonProps = {
    link: string,
    text: string,
}

const LinkButton = ({ link, text }: LinkButtonProps) => {
    return (
        <a href={link} className="btn btn-primary transform transition duration-300 hover:scale-105">
            {text}
        </a>
    )
}

export default LinkButton;