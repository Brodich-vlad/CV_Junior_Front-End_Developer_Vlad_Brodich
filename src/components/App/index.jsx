import { useState } from "react";
import { summaryEng, summaryUk } from "../../data/index.js";
import { Header } from "../header/Header.jsx";
import { Main } from "../main/Main.jsx";
import { Footer } from "../footer/Footer.jsx";
import { ThemeContext, stateDefault } from "../../state/state.js";
import clsx from "clsx";

export default function App() {
	const [state, setState] = useState(stateDefault);


	// Клік перемикач мови сторінки хедер.
	const clickBtnlang = it => {
		if (it === 'uk') {
			setState(state => {
				return {
					...state,
					language: 'en',
					summary: summaryUk
				};
			});
		} else if (it === 'en') {
			setState(state => {
				return {
					...state,
					language: 'uk',
					summary: summaryEng
				};
			});
		}
	};

	//  Клік темна/світла тема.
	const clickDark = () => {
		if (state.dark === false) {
			setState(state => {
				return {
					...state,
					dark: true
				};
			});
		} else {
			setState(state => {
				return {
					...state,
					dark: false
				};
			});
		}
	};

	return (
		<ThemeContext.Provider 
			value={{ ...state, setDark: clickDark, setLanguage: clickBtnlang }}>
			<div className={clsx('main-page', state.dark && '_dark')}>
				<Header/>

				<Main lang={state.summary.langPage} data={state.summary} />

				<Footer />
			</div>
		</ThemeContext.Provider>
	);
};