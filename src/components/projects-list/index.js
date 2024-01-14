import { useContext, useState } from "react";
import {getId, mainProjects, secondProjects } from "../../methods/index";
import {Link} from "../link/index";
import { ThemeContext } from "../../state/state";

export function ProjectsList() {
	const state = useContext(ThemeContext);
	const mainArr = mainProjects(state.summary.projects.projects);
	const secondArr = secondProjects(state.summary.projects.projects);

	const [moreProproject, setMoreProproject] = useState(false);

	const arrList =(arr,lang,id)=>{
	return arr.map(({linkProject,title,technologies,text,linkGitNub,img},i)=>{
		return (
			<li id={id && i === 2 ? id : undefined} lang={lang} key={getId(i)} className="projects-cart">
				<div className="projects-cart__info">
					{linkProject ? (
						<Link
							className={'projects-cart__info-title'}
							href={linkProject}
							target="_blank"
							rel={'noreferrer'}
							content={<h3>{title}</h3>}
						/>
					) : (
						<h3 className={'projects-cart__info-title'}>{title}</h3>
					)}

					<p className="projects-cart__info-text">{technologies}</p>
					<p className="projects-cart__info-text">{text}</p>
					<Link
						className={'projects-cart__info-link'}
						href={linkGitNub}
						target="_blank"
						rel={'noreferrer'}
						content={'GitNub'}
					/>
				</div>
				{linkProject ? (
					<Link
						className="projects-cart__img"
						href={linkProject}
						target="_blank"
						rel={'noreferrer'}
						content={<img src={img} alt={title} />}
					/>
				) : (
					<div className="projects-cart__img">
						<img src={img} alt={title} />
					</div>
				)}
			</li>
		);
		})
	}

	return (
		<ul className="section-projects__list">
			{arrList(mainArr, state.language, 'secjnd-projects')}

			{moreProproject ? (
				arrList(secondArr, state.language)
			) : (
				<li className="section-projects__list-btn">
					<a
						onClick={() => {
							setMoreProproject(true);
						}}
						type="button"
						lang={state.language}
						href="#secjnd-projects"
					>
						{state.summary.projects.btnMore}
					</a>
				</li>
			)}
		</ul>
	);
}