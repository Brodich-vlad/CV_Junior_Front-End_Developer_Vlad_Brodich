import { Component } from "react";
import { summaryEng, summaryUk } from "../../data/index.js";
import { Header } from "../header/index.js";
import { Main } from "../main/index.js";
import { Footer } from "../footer/index.js";

class App extends Component{
    state = {
        summary: summaryEng,
        mainPageClass:'main-page',
        minList: false,
        dark:false,
        open:false,
        language:'uk',
    }
    // Кнопка більше проєктів за замовчуванням три.
    clickMoreProproject =()=>{
        if(this.state.minList === false){
            this.setState((state)=>{
                return{
                    ...state,
                    minList: true,
                }
            })
        }
    }
    //    Клік кнопки бургер меню хедер.
    clicBtnMenu = ()=>{
        if(this.state.open === false){
            this.setState((state)=>{
                return{
                    ...state,
                    open:true,
                }
            })
        }
        else  if(this.state.open === true){
            this.setState((state)=>{
                return{
                    ...state,
                    open:false,
                }
            }) 
        }


    }
    // Клік перемикач мови сторінки хедер. 
    clickBtnlang=(it)=>{
        if(it === 'uk'){
            this.setState((state)=>{
                return{
                    ...state,
                    language:'en',
                    summary:summaryUk,
                }
            })
        }
        else if(it === 'en'){
            this.setState((state)=>{
                return{
                    ...state,
                    language:'uk',
                    summary:summaryEng,
                }
            })
        }
    }
    //    Клік меню хедер.
    clicMenu = ()=>{
        if(this.state.open === true){
            this.setState((state)=>{
                return{
                    ...state,
                    open:false,
                }
            }) 
        }
        else return
    }
    //  Клік темна/світла тема. 
    clickDark=()=>{
        if(this.state.dark === false){
            this.setState((state)=>{
                return{
                    ...state,
                   dark:true,
                }
            })
        } 
        else {
            this.setState((state)=>{
                return{
                    ...state,
                   dark:false,
                }
            })
        }
    }

    render(){
        return(
            <div className={`main-page${this.state.dark === true? ' _dark':''}${this.state.open === true? ' _open':''}`}>
                <Header data={this.state.summary} clickDark={this.clickDark} lang={this.state.language} clickBtnlang={this.clickBtnlang} clickBurgerBtn={this.clicBtnMenu} clicMenu={this.clicMenu} dark={this.state.dark}/>

                <Main lang={this.state.summary.langPage} data={this.state.summary} flag={this.state.minList} clickMoreProproject={this.clickMoreProproject}/>

                <Footer data={this.state.summary.contact} lang={this.state.summary.langPage}/>
            </div>
        )
    }
}

export default App;