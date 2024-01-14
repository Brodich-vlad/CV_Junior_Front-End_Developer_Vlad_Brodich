import './footer.css';
import { useContext } from "react";
import { getId } from "../../methods/index";
import { Link } from "../link";
import { ThemeContext } from "../../state/state";

export function Footer() {
  const state = useContext(ThemeContext);

	const contact = state.summary.contact.contacts.map(({ contact, href, contactLogo }, i) => {
		return (
			<li key={getId(i)} className="footer__contact-list__item">
				<Link
					className={'contact-link'}
					href={href}
					content={
						<>
							<div className="contact-logo">
								<img src={contactLogo} alt="logo" />
							</div>
							{contact}
						</>
					}
				/>
			</li>
		);
	});

	return (
		<footer className="footer" id="contact">
			<div className="footer__contact">
				<h2 className="footer__contact-title" lang={state.language}>
					{state.summary.contact.title}
				</h2>
				<ul className="footer__contact-list">{contact}</ul>
			</div>
		</footer>
	);
};
