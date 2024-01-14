import { useState } from "react";
import { summaryEng, summaryUk } from "../../data/index.js";
import { Header } from "../header/index.js";
import { Main } from "../main/index.js";
import { Footer } from "../footer/index.js";
import { ThemeContext, stateDefault } from "../../state/state.js";

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
		<ThemeContext.Provider value={{ ...state, setDark: clickDark, setLanguage: clickBtnlang }}>
			<div className={`main-page${state.dark ? ' _dark' : ''}`}>
				<Header/>

				<Main lang={state.summary.langPage} data={state.summary} />

				<Footer />
			</div>
		</ThemeContext.Provider>
	);
};