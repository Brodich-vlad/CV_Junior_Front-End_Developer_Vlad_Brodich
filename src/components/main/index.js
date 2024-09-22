import "./main.css";
import { useContext } from "react";
import { EducationList } from "../education-list";
import { ProjectsList } from "../projects-list";
import { SkillsCarts } from "../skills-carts";
import { ThemeContext } from "../../state/state";
// import Reviews from "../reviews/Reviews";

export function Main() {
  const state = useContext(ThemeContext);

  return (
    <main className="main">
      <section className="section-title">
        <h1 className="section-title__title" lang={state.language}>
          {state.summary.name}
          <br />
          <span>{state.summary.profession}</span>
        </h1>
        <div className="section-title__img">
          <img src={state.summary.photo} alt={state.summary.name} />
        </div>
      </section>
      <section id="about" className="section-about">
        <div className="section-about__wrap">
          <h2 className="section-about__title" lang={state.language}>
            {state.summary.about.title}
          </h2>
          <div className="section-about__text" lang={state.language}>
            {state.summary.about.text}
          </div>
        </div>
      </section>

      <section id="projects" className="section-projects">
        <div className="section-projects__wrap">
          <h2 className="section-projects__title" lang={state.language}>
            {state.summary.projects.title}
          </h2>
          <ProjectsList/>
        </div>
      </section>

      <section id="skills" className="section-skills">
        <SkillsCarts/>
      </section>

      <section id="education" className="section-education">
        <EducationList/>
      </section>

      {/* <section id="reviews" className="section-skills">
      <Reviews/>
      </section> */}
    </main>
  );
}