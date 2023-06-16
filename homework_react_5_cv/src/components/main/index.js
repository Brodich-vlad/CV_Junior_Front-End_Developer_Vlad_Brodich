import { EducationList } from "../education-list";
import { ProjectsList } from "../projects-list";
import { SkillsCarts } from "../skills-carts";

export function Main({ lang, data, flag, clickMoreProproject }){
    return(
        <main className="main">
            <section className="section-title">
                <h1 className="section-title__title" lang={lang}>{data.name}<br/><span>{data.profession}</span></h1>
                <div className="section-title__img">
                    <img src={data.photo} alt={data.name}/>
                </div>
            </section>
            <section id="about" className="section-about">
                <div className="section-about__wrap">
                    <h2 className="section-about__title" lang={lang}>{data.about.title}</h2>
                    <p className="section-about__text" lang={lang}>{data.about.text}</p>
                </div>
            </section>

            <section id="projects" className="section-projects">
                <div className="section-projects__wrap">
                    <h2 className="section-projects__title" lang={lang}>{data.projects.title}</h2>
                    <ProjectsList data={data.projects.projects} flag={flag} clickMoreProproject={clickMoreProproject} btnText={data.projects.btnMore} lang={lang}/>
                    
                </div>
            </section>

            <section id="skills" className="section-skills">
                <SkillsCarts data={data.skills} lang={lang}/>
            </section>

            <section id="education" className="section-education">
                <EducationList data={data.education} lang={lang}/>
            </section>
        </main>
    )
}