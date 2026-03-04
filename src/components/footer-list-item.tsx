interface Props{
    text:string;
    href:string;
}

export const FooterListItem = ({text, href}:Props) => {
    return (
        <div className="text-left underline">
            <li>
                <a className="hover:font-bold" href={href}>
                    {text}
                </a>
            </li>
        </div>
    )
}

// export default footer-list-item
