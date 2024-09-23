import React, { useState } from "react";
import './header.css';
import sun from "../../img/svg-icon/sun.svg";
import moon from "../../img/svg-icon/moon.svg";
import globe_white from "../../img/svg-icon/globe_white.svg";
import globe_dark from "../../img/svg-icon/globe_dark.svg";
import { Link } from "../link/Link";
import { useContext } from "react";
import { ThemeContext } from "../../state/state";
import clsx from "clsx";
import { bodyLock } from "../../methods/bodyLock";

export function Header() {
	const state = useContext(ThemeContext);

	const [ openMenu, setOpenMenu ] = useState(false);
	//    Клік кнопки бургер меню хедер.
	const clicBtnMenu = () => {
		setOpenMenu(!openMenu);
		bodyLock(!openMenu)
	};
	//    Клік меню хедер.
	const clicMenu = () => {
		if (openMenu) {
			setOpenMenu(false);
			bodyLock(false)
		} else return;
	};

	return (
		<header className="header">
			<nav className="header__nav">
				<a className="header__logo" href="/">
					V<span>B</span>
				</a>
				<ul
					className={clsx('header__nav-list', openMenu && '_open')}
					onClick={() => {
						clicMenu();
					}}
				>
					<li className="header__nav-list__item about-icon" lang={state.summary.langPage}>
						<Link href="#about" content={state.summary.about.title} />
					</li>

					<li className="header__nav-list__item projects-icon" lang={state.summary.langPage}>
						<Link href="#projects" content={state.summary.projects.title} />
					</li>
					<li className="header__nav-list__item skills-icon" lang={state.summary.langPage}>
						<Link href="#skills" content={state.summary.skills.title} />
					</li>
					<li className="header__nav-list__item education-icon" lang={state.summary.langPage}>
						<Link href="#education" content={state.summary.education.title} />
					</li>
					<li className="header__nav-list__item reviews-icon" lang={state.summary.langPage}>
						<Link href="#reviews" content={state.summary.reviews.title} />
					</li>
					<li className="header__nav-list__item contact-icon" lang={state.summary.langPage}>
						<Link href="#contact" content={state.summary.contact.title} />
					</li>
				</ul>
				<ul className="header__nav-btns">
					<li className="header__nav-btn">
						<label className="header__nav-btn__light" htmlFor="toggle">
							<input type="checkbox" name="toggle" id="toggle" className="header__nav-btn__light_input" hidden />
							<span
								className="header__nav-btn__light___display"
								onClick={() => {
									state.setDark();
								}}
							>
								<img className="sun" src={sun} alt="sun"></img>
								<img className="moon" src={moon} alt="moon"></img>
							</span>
						</label>
					</li>
					<li className="header__nav-btn">
						<button
							onClick={() => {
								state.setLanguage(state.language);
							}}
							className="btn-lang"
							type="button"
						>
							<img src={state.dark === false ? globe_dark : globe_white} alt="globe" />
							<span className="btn-lang_txt">{state.summary.langPage}</span>
							<span className="btn-lang_txt-second">{state.language}</span>
						</button>
					</li>
				</ul>
			</nav>
			<button
				onClick={() => {
					clicBtnMenu();
				}}
				className={clsx('burger-btn', openMenu && '_open')}
				type="button"
			>
				<div></div>
			</button>
		</header>
	);
}
