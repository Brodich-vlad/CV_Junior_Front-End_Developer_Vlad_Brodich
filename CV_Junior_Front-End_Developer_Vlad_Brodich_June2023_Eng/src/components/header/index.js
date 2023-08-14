import React from "react";
import sun from "../../img/svg-icon/sun.svg";
import moon from "../../img/svg-icon/moon.svg";
import globe_white from "../../img/svg-icon/globe_white.svg";
import globe_dark from "../../img/svg-icon/globe_dark.svg";
import { Link } from "../link";

export function Header({data, clickDark, lang, clickBtnlang, clickBurgerBtn, clicMenu, dark}) {
 
    return(
        <header className="header">

            <nav className="header__nav">
                <a className="header__logo" href="/">V<span>B</span></a>
                <ul className="header__nav-list" onClick={()=>{
                    clicMenu()
                }}>
                    <li className="header__nav-list__item about-icon" lang={data.langPage}>
                        <Link href="#about" content={data.about.title}/>
                    </li>

                    <li  className="header__nav-list__item projects-icon" lang={data.langPage}>
                        <Link href="#projects" content={data.projects.title}/>
                    </li>
                    <li  className="header__nav-list__item skills-icon" lang={data.langPage}>
                        <Link href="#skills" content={data.skills.title}/>
                    </li>
                    <li  className="header__nav-list__item education-icon" lang={data.langPage}>
                        <Link href="#education" content={data.education.title}/>
                    </li>
                    <li  className="header__nav-list__item contact-icon" lang={data.langPage}>
                        <Link href="#contact" content={data.contact.title}/>
                    </li>
                </ul>
                <ul className="header__nav-btns">
                    <li className="header__nav-btn">
                        <label className='header__nav-btn__light' htmlFor='toggle'>
                            <input type='checkbox' name='toggle' id='toggle' className="header__nav-btn__light_input" hidden/>
                            <span className="header__nav-btn__light___display" onClick={()=>{
                            clickDark()
                        }}>
                            <img className="sun" src={sun} alt='sun'></img> 
                            <img className="moon" src={moon} alt='moon'></img>   
                            </span>
                        </label>
                    </li>
                    <li className="header__nav-btn">
                        <button onClick={()=>{ clickBtnlang(lang)}} className="btn-lang" type="button">
                          <img src={dark === false ? globe_dark : globe_white} alt="globe"/><span className="btn-lang_txt">{data.langPage}</span>
                          <span className="btn-lang_txt-second">{lang}</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <button onClick={()=>{
                clickBurgerBtn()
            }} className="burger-btn" type="button">
                <div></div>
            </button>
        </header>
    )
}
