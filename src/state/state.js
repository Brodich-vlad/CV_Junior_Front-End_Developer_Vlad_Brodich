import { createContext } from 'react';
import { summaryUk } from '../data';

export const stateDefault = {
	summary: summaryUk,
	mainPageClass: 'main-page',
	dark: true,
	language: 'en',
	setDark: () => {},
	setLanguage: () => {}
};
export const ThemeContext = createContext(stateDefault);
