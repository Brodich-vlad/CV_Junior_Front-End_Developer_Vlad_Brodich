import { getId } from "../../methods/index";
import { Link } from "../link";

export function Footer({data,lang}){
    const contact = data.contacts.map(({contact, href, contactLogo},i)=>{
        return <li key={getId(i)} className="footer__contact-list__item">
            <Link className={'contact-link'} href={href} content={<><div className="contact-logo">
                    <img src={contactLogo} alt="logo"/>
                </div>
            {contact}</>}/>
    </li>
    })

    return(
        <footer className="footer">
            <div className="footer__contact">
                <h2 className="footer__contact-title" lang={lang}>{data.title}</h2>
                <ul className="footer__contact-list">
                    {contact}
                </ul>
            </div>
        </footer>
    )
}
