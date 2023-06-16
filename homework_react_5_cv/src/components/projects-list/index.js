import {getId, mainProjects, secondProjects } from "../../methods/index";
import {Link} from "../link/index";

export function ProjectsList({data, flag, clickMoreProproject, btnText, lang }){
    const mainArr = mainProjects(data);
    const secondArr = secondProjects(data);

    const arrList =(arr,lang,id)=>{
        return arr.map(({linkProject,title,technologies,text,linkGitNub,img},i)=>{
            return  <li id={id && i === 2?id:undefined} lang={lang} key={getId(i)} className="projects-cart">
                       <div className="projects-cart__info">
                           <Link className={"projects-cart__info-title"} href={linkProject} target="_blank" rel={"noreferrer"} content={<h3>{title}</h3>}/>
       
                           <p className="projects-cart__info-text" >{technologies}</p>
                           <p className="projects-cart__info-text">{text}</p>
                           <Link className={"projects-cart__info-link"} href={linkGitNub} target="_blank" rel={"noreferrer"} content={'GitNub'} />
                       </div>
                       <Link className="projects-cart__img" href={linkProject} target="_blank" rel={"noreferrer"} content={<img src={img} alt={title}/>}/>
                   </li>
           })
    }

    return(
        <ul className="section-projects__list">
            
            {arrList(mainArr,lang,"secjnd-projects")}

            {flag === false ? <li  className="section-projects__list-btn"><a onClick={()=>{
                clickMoreProproject()
            }} type="button" lang={lang} href='#secjnd-projects'>{btnText}</a></li>:arrList(secondArr,lang)}
          
        </ul>
    )
}