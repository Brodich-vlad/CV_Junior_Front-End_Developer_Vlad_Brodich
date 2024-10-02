import my_photo from '../img/my_photo.jpg';
import mountains_europe from '../img/projects/mountains-europe.jpg';
import web_studio from '../img/projects/web-studio.jpg';
import store_demo from '../img/projects/store-demo.png';
import calculator from '../img/projects/calculator.jpg';
import starry_sky from '../img/projects/homework_react_starry_sky.png';
import notebook_en from '../img/projects/homework__notebook_en.jpg';
import notebook_uk from '../img/projects/homework_notebook_uk.jpg';
import sapper from '../img/projects/homework_react_sapper.jpg';
import movie from '../img/projects/movie_tickets.png';
import timer from '../img/projects/timer.png';
import tetris from '../img/projects/tetris.png';
import calculator_ios from '../img/projects/calculator_ios.png';
import rectangle_packing from '../img/projects/rectangle-packing.png';
import gym from '../img/projects/gym-prototype.png';
import displaying_site from '../img/projects/displaying-site.png';
import zbir from '../img/projects/44_zbir.png';
// 
import phone from '../img/svg-icon/phone.svg';
import mail from '../img/svg-icon/e-mail_black.svg';
import telegram from '../img/svg-icon/telegram_icon.svg';
import in_icon from '../img/svg-icon/in_black.svg';
import github from '../img/svg-icon/github.svg';
import gitlab from '../img/svg-icon/gitlab.svg';

import certificate_en from '../img/certificates/certificate_en.jpg';
import certificate_html from '../img/certificates/certificate_html.jpg';
import certificate_front_end from '../img/certificates/certificate_front-end.png';
import diploma from '../img/certificates/diploma.png';

import baza_trainee from '../img/projects/baza_trainee.jpg';
import pdf_placeholder from '../img/svg-icon/pdf-placeholder.svg';
import cv from '../img/documents/CV_Vlad Brodich_uk_2024.pdf';

import feedback_1 from '../img/reviews/feedback_1.jpg';
import feedback_2 from '../img/reviews/feedback_2.jpg';
import feedback_3 from '../img/reviews/feedback_3.jpg';
import feedback_4 from '../img/reviews/feedback_4.jpg';
import feedback_5 from '../img/reviews/feedback_5.jpg';
import feedback_6 from '../img/reviews/feedback_6.jpg';
import feedback_7 from '../img/reviews/feedback_7.jpg';
import feedback_8 from '../img/reviews/feedback_8.jpg';

export const summaryEng = {
	langPage: 'en',
	name: 'Vlad Brodich',
	profession: 'Front-End Developer',
	photo: my_photo,
	about: {
		title: 'About Me',
		text: (
			<>
			<p>
				<span> My name is Vlad. </span> 
				As a Front-End Developer, I create innovative and aesthetically pleasing websites, striving combine technical efficiency with high-quality design. My goal is to make the web accessible and exciting for users. 
				</p>
				<br /> 
				<p><span> From February 2024 until now, </span>
				I have been participating in Baza Trainee Ukraine volunteer projects. In the position of Front-End developer.</p>
				<p>Development of new sites of varying complexity and support and optimization of existing projects.</p>
				<p><span> As the Team Lead of the project, </span> I am responsible for the organization and management of the development team. I distribute tasks, conduct code reviews, help other developers. I facilitate communication between stakeholders and the development team, ensuring a clear understanding of project requirements and timely completion of tasks.</p>
				<p>In addition, I manage risk, troubleshoot critical issues, and implement best practices in coding standards and project management.</p>
				<p>My leadership focuses on fostering team collaboration and maintaining high levels of productivity throughout the project lifecycle.</p>
				<p>
				<a href='https://baza-skill.com.ua/ua/candidate/42' className={'projects-cart__info-title'} rel={'noreferrer'} target='_blank'>My resume and recommendations on Baza Skill</a></p>
				<br /> 
				<p><span>From October 2023 to September 2024</span> participated in the receiving program experience from VixDev. In the position of Junior Front-End developer.</p>
				 <p>My main task was to support and optimize existing projects.</p>
				<p>Creation of application prototypes according to the description, for the further work of the team.</p>
				<br /> 
				<p><span>From 2005 until now, Entrepreneur (FOP) JSC "Zhulyani" </span> Sale of auto parts.</p> 
				<p>Installation and maintenance of goods accounting, PRRO and financial reporting programs. Setting up online stores.</p>
				<br /> 
				<p>My main goal is to develop as a Front-end developer, to contribute to the success of the team and acquiring new skills in the field of web development.</p>
			</>
		)
	},
	projects: {
		title: 'Projects',
		projects: [
			{
				title: 'Baza Trainee Ukraine',
				technologies: '[ Next.js, SCSS, next-intl, zod, zustand, SEO optimization, Docker ]',
				text: "The main site of Baza Trainee Ukraine. Participated as a developer and Team Lead of the project. Was responsible for the development of the site's admin panel, ensuring its functionality and convenience. Worked on SEO optimization to improve website visibility. Coordinated the work of the team, made technical decisions, monitored compliance with deadlines and the quality of completed tasks.",
				img: baza_trainee,
				linkProject: 'https://baza-trainee.tech/uk',
				linkGitNub: 'https://github.com/baza-trainee/baza-2-front'
			},
			{
				title: '44 Brigade',
				technologies: '[ React.js, Responsive CSS, Monobank open API ]',
				text: 'Baza-Trainee Ukraine volunteer project. Fundraising site for our Defenders. Great teamwork experience',
				img: zbir,
				linkProject: 'https://44-zbir.vercel.app/',
				linkGitNub: 'https://github.com/baza-trainee/44-zbir'
			},
			{
				title: 'Mobile application prototype',
				technologies: '[ HTML, JavaScript, Responsive CSS ]',
				text: 'Make a prototype of a client mobile application based on the scheme menu. The task of the prototype is to give an idea of what the pages and menus in the project will be. To create the project, we use HTML CSS JS, the design is free',
				img: gym,
				linkProject: 'https://gym-prototype-vb.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/gym-prototype_f_39_dev_vb.git'
			},
			{
				title: 'A site for viewing projects on different devices',
				technologies: '[ Vue 3, Typescript, Responsive CSS, Vite ]',
				text: 'The purpose of creating a site is to display projects on different devices. Allows you to configure the project, check adaptability, create a presentation. Also consolidate the knowledge gained while learning Vue and Typescript',
				img: displaying_site,
				linkProject: 'https://displaying-site-different-devices.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/displaying-site-different-devices.git'
			},
			{
				title: 'Algorithm for packing rectangles',
				technologies: '[ React.js,Typescript, REST API, Aдаптивний CSS,Vite, Zustand, Zod ]',
				text: 'Test task for the Junior Front End developer position: to make an algorithm that will place the given blocks in the sheet as ergonomically as possible (so that as much space as possible is used) and will produce the smallest possible number of sheets.',
				img: rectangle_packing,
				linkProject: 'https://rectangle-packing-algorithm-vb.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/rectangle-packing-algorithm_vb.git'
			},
			{
				title: 'Tetris online game',
				technologies: '[ HTML, JavaScript, Adaptive CSS ]',
				text: "The Tetris game was created as part of the 'Let's write a Tetris game on JS' marathon and took first place among the best projects.",
				img: tetris,
				linkProject: 'https://game-tetris-vb.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/project-tetris.git'
			},
			{
				title: 'Calculator mobile application',
				technologies: '[ React Native, Redux ]',
				text: 'The mobile application for Android that repeats all the functionality of the standard IOS calculator.',
				img: calculator_ios,
				// linkProject: '#',
				linkGitNub: 'https://gitlab.com/vlad_brodich/tpf-45_dev_vb-react-native-redux.git'
			},
			{
				title: 'Project Booking movie tickets.',
				technologies: '[ React.js, Adaptive CSS ]',
				text: "Homework with React.js project ' Booking movie tickets' - Learning methods of working with Сontext in React.The project is placed among the best works on the school's website.",
				img: movie,
				linkProject: 'https://project-cinema-uk-en.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/booking_movie_tickets.git'
			},

			{
				title: 'Online game "Sapper."',
				technologies: '[ React.js, Adaptive CSS ]',
				text: "Homework with React.js project 'Online game 'Sapper' - My personal vision of a popular game in modern realities.The project is placed among the best works on the school's website.",
				img: sapper,
				linkProject: 'https://homeork-game-sapper.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_6_game_sapper.git'
			},

			{
				title: 'Timer.',
				technologies: '[ React, Redux, JavaScript, HTML/Adaptive CSS ]',
				text: 'Homework with React.js Redux  "Тimer" - Using Redux in React projects.',
				img: timer,
				linkProject: 'https://homework-react-redux-9-timer.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework-react-redux-timer.git'
			},
			{
				title: 'Internet-shop "Shorts"',
				technologies: '[ Semantic HTML, Adaptive CSS, BEM, GIT, JavaScript ]',
				text: 'JavaScript Homework The Online Store project is a great example of teamwork that aims to demonstrate basic backend skills.',
				img: store_demo,
				linkProject: 'https://store-demo-fe.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homwork_js_internet-shop-shorts.git'
			},
			{
				title: 'Starry sky',
				technologies: '[ React.js ]',
				text: 'Homework with React.js project "Starry sky" - Space theme, lots of animations, I really like layouts like this.',
				img: starry_sky,
				linkProject: 'https://magenta-youtiao-d965af.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_react_starry-sky.git'
			},
			{
				title: 'Mountains Europe',
				technologies: '[ Semantic HTML, Adaptive CSS, BEM, GIT, JavaScript ]',
				text: "Personal project 'Mountains Europe', which aims to show the basic skills of creating semantics and adapting sites for different devices and creating a simple slider using JavaScript",
				img: mountains_europe,
				linkProject: 'https://mountains-europe-demo-slider.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/mountains-europe_slider_js.git'
			},
			{
				title: 'Web Studio',
				technologies: '[ Semantic HTML, Adaptive CSS, BEM, GIT ]',
				text: "A personal web studio project, which aims to show the basic skills of creating semantics and adapting to different devices' sites",
				img: web_studio,
				linkProject: 'https://web-studio-work-vlad-brodich.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/web-studio_independent_work.git'
			},
			{
				title: 'Notebook',
				technologies: '[ React.js ]',
				text: "Homework with React.js pr. 'Notebook' - Creating and editing a list of products.",
				img: notebook_en,
				linkProject: 'https://ephemeral-klepon-13494c.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_react_3_notebook.git'
			},
			{
				title: 'Online Calculator',
				technologies: '[ JavaScript ]',
				text: "Homework with JavaScript project 'Online calculator' is a great project for training logical thinking and knowledge of mathematics.",
				img: calculator,
				linkProject: 'https://genuine-starburst-33ab73.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_js_online-calculator.git'
			}
		],
		btnMore: 'More projects . . .'
	},
	skills: {
		title: 'Skills',
		skills: [
			{
				title: 'Skills',
				text: [
					'HTML5, CSS3 (SCSS / SASS / LESS), Tailwind CSS',
					'JavaScript Es6+',
					'Type-Script',
					'React.js',
					'React Native',
					'Vue.js',
					'Next.js',
					'Redux',
					'Knowledge of version control systems: Git',
					'Trello',
					'Experience with REST ful APIs',
					'Understanding the principles of developing adaptive and responsive design',
					'Basics of UX/UI design',
					'Experience with development environment customization tools - WebPack, Vite.',
					'Experience with the state management library - Zustand.',
					'Data validation with automatic typing using - Zod.',
					'Ability to work with developer tools(DevTools)'
				]
			},
			{
				title: 'Soft Skills',
				text: [
					'High responsibility and quick learning of new material',
					'Good communication skills and the ability to work effectively in a team',
					'Ability to meet deadlines',
					'Desire to constantly improve and develop your skills'
				]
			},
			{
				title: 'Languages',
				text: ['Ukrainian — Native', 'English — Elementary']
			}
		]
	},
	education: {
		title: 'Education',
		schools: [
			{
				profession: 'Vue.js Online course',
				school: 'Ukraine',
				date: 'JANUARY 2024 | (1 month)'
			},
			{
				profession: 'React Native Online course',
				school: 'Ukraine',
				date: 'DECEMBER 2023 | (1 month)'
			},
			{
				profession: 'Type-Script Online course',
				school: 'Ukraine',
				date: 'NOVEMBER 2023 | (1 month)'
			},
			{
				profession: 'Next.js Online course',
				school: 'Ukraine',
				date: 'OCTOBER 2023 | (2 months)'
			},
			{
				profession: 'Front-End Advanced Cursor Online',
				school: 'Programming school Cursor, Ukraine',
				date: 'AUGUST 2023 | (5 months)'
			},
			{
				profession: 'Front-End Online',
				school: 'Programming school Philip Sevene, Ukraine',
				date: 'SEPTEMBER 2022 | OCTOBER 2023',
				imgCertificate: certificate_front_end
			},
			{
				profession: 'English with a teacher Online',
				school: 'English school Englishdom, Ukraine',
				date: 'SEPTEMBER 2022 | (9 months)',
				imgCertificate: certificate_en
			},
			{
				profession: "Marathon Java Script' IT Generation' Online",
				school: 'Programming school GoIT, Ukraine',
				date: 'AUGUST 2022 | (4 weeks)'
			},
			{
				profession: 'Course HTML CSS Online',
				school: 'Programming school GoIT, Ukraine',
				date: 'JUNE 2022 | (2 months)',
				imgCertificate: certificate_html
			},
			{
				profession: 'Mechanical engineer',
				school: 'Kyiv Polytechnic Institute',
				date: 'SEPTEMBER 1997 | (5 years)',
				imgCertificate: diploma
			}
		]
	},
	reviews:{
		title: 'reviews',
		reviews:[
			{
				title:'feedback',
				img: feedback_1
			},
			{
				title:'feedback',
				img: feedback_2
			},
			{
				title:'feedback',
				img: feedback_3
			},
			{
				title:'feedback',
				img: feedback_4
			},
			{
				title:'feedback',
				img: feedback_5
			},
			{
				title:'feedback',
				img: feedback_6
			},
			{
				title:'feedback',
				img: feedback_7
			},
			{
				title:'feedback',
				img: feedback_8
			}

		],
	},
	contact: {
		title: 'Contact',
		contacts: [
			{
				contactLogo: phone,
				contact: '+38 (067) 760 65 08',
				href: 'tel:+380677606508'
			},
			{
				contactLogo: mail,
				contact: 'brodich_vlad@ukr.net',
				href: 'mailto:brodich_vlad@ukr.net'
			},
			{
				contactLogo: telegram,
				contact: 't.me/Vlad_Green_Bro',
				href: 'https://t.me/Vlad_Green_Bro'
			},
			{
				contactLogo: in_icon,
				contact: 'https://www.linkedin.com/in/',
				href: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%B1%D1%80%D0%BE%D0%B4%D0%B8%D1%87-3a1a95279/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6BXqQwKdQomR3DVER3%2BjvA%3D%3D'
			},
			{
				contactLogo: github,
				contact: 'GitHub',
				href: 'https://github.com/Brodich-vlad'
			},
			{
				contactLogo: gitlab,
				contact: 'GitLab',
				href: 'https://gitlab.com/vlad_brodich'
			},
			{
				contactLogo: pdf_placeholder,
				contact: 'CV Vlad Brodich',
				href: cv,
			},
		]
	}
};

export const summaryUk = {
	langPage: 'uk',
	name: 'Влад Бродич',
	profession: 'Front-End Розробник',
	photo: my_photo,
	about: {
		title: 'Про мене',
		text: (
			<>
				<p>
					<span> Мене звати Влад. </span> 
				Як Front-End Розробник, я створюю інноваційні та естетично виглядаючі веб-сайти, прагнучи
				поєднувати технічну ефективність з високоякісним дизайном. Моя мета - зробити веб-середовище доступним та
				захоплюючим для користувачів. 
				</p>
				<br /> 
				<p><span> З Лютого 2024 р. по теперішній час </span>
				приймаю участь у волонтерських проєктах Baza Trainee Ukraine. На посаді Front-End розробник.</p>
				<p>Розробка нових сайтів різної складності та підтримка оптимізація існуючих проєктів.</p>
				<p><span> Як Team Lead</span> проєкту, я відповідаю за організацію та керування командою розробників. Роздаю завдання, проводжу рецензії коду, допомогою іншим розробникам. Я сприяю спілкуванню між зацікавленими сторонами та командою розробників, забезпечуючи чітке розуміння вимог проекту та своєчасне виконання завдань.</p>
				<p>Крім того, я керую ризиками, усуваю критичні проблеми та впроваджую найкращі практики стандартів кодування та управління проєктами.</p>
				<p>Моє керівництво зосереджено на сприянні співпраці в команді та підтримці високого рівня продуктивності протягом життєвого циклу проекту.</p>
				<p>
				<a href='https://baza-skill.com.ua/ua/candidate/42' className={'projects-cart__info-title'} rel={'noreferrer'} target='_blank'>Моє резюме та рекомендації на Baza Skill</a></p>
				<br /> 
				<p><span>З Жовтня 2023 р. по Вересень 2024 р.</span> приймав участь в програмі отримання
				досвіду від компанії VixDev. На посаді Junior Front-End розробник.</p>
				 <p>Основним моїм завданням була підтримка оптимізація існуючих проєктів.</p>
				<p>Створення прототипів додатків згідно опису, для подальшої роботи команди.</p>
				<br /> 
				<p><span>З 2005 р. по теперішній час Підприємець (ФОП) АЦ "Жуляни" </span> Продаж автозапчастин.</p> 
				<p>Встановлення та обслуговування програм обліку товарів, ПРРО та фінансової звітності. Налаштування роботи інтернет-магазинів.</p>
				<br /> 
				<p>Моїм головним прагненням є розвиток як Front-end розробника, внесення свого внеску в успіх команди та
				здобуття нових навичок у сфері веб-розробки.</p>
			</>
		)
	},
	projects: {
		title: 'Проєкти',
		projects: [
			{
				title: 'Baza Trainee Ukraine',
				technologies: '[ Next.js, SCSS, next-intl, zod, zustand, SEO оптимізація, Docker ]',
				text: 'Головний сайт Baza Trainee Ukraine. Брав участь як розробник та Team Lead проєкту. Відповідав за розробку адмінпанелі сайту, забезпечення її функціональності та зручності. Працював над SEO оптимізацією для покращення видимості сайту. Координував роботу команди, приймав технічні рішення, контролював дотримання термінів і якість виконаних завдань.',
				img: baza_trainee,
				linkProject: 'https://baza-trainee.tech/uk',
				linkGitNub: 'https://github.com/baza-trainee/baza-2-front'
			},
			{
				title: '44 Бригада',
				technologies: '[ React.js, Aдаптивний CSS, Monobank open API ]',
				text: 'Волонтерський проект Baza-Trainee Ukraine. Сайт для збору коштів для наших Захисників. Чудовий досвід роботи в команді',
				img: zbir,
				linkProject: 'https://44-zbir.vercel.app/',
				linkGitNub: 'https://github.com/baza-trainee/44-zbir'
			},
			{
				title: 'Прототип мобільного додатку',
				technologies: '[ HTML, JavaScript, Aдаптивний CSS ]',
				text: 'Зробити прототип клієнтського мобільного додатку виходячи з меню схеми. Задача прототипу дати уявлення які будуть сторінки та меню в проєкті. Для створення проєкту використовуємо HTML CSS JS,   	дизайн вільний',
				img: gym,
				linkProject: 'https://gym-prototype-vb.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/gym-prototype_f_39_dev_vb.git'
			},
			{
				title: 'Сайт для перегляду проектів на різних пристроях.',
				technologies: '[ Vue 3, Typescript, Aдаптивний CSS, Vite ]',
				text: 'Мета створення цього сайту - відображення проектів на різних пристроях. Дає змогу налаштувати проект, перевірити на адаптивність, створити презентацію. Також закріпити знання отримані при вивченні Vue та Typescript',
				img: displaying_site,
				linkProject: 'https://displaying-site-different-devices.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/displaying-site-different-devices.git'
			},
			{
				title: 'Алгоритм пакування прямокутників',
				technologies: '[ React.js, Typescript, REST API, Aдаптивний CSS, Vite, Zustand, Zod ]',
				text: 'Тестове завдання на посаду Junior Front End розробник: зробити алгоритм який розташує задані блоки в аркуші максимально ергономічно(щоб як умога більше місця було задіяно) і видасть найменьшу можливу кількість аркущів.',
				img: rectangle_packing,
				linkProject: 'https://rectangle-packing-algorithm-vb.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/rectangle-packing-algorithm_vb.git'
			},
			{
				title: 'Онлайн-гра Тетріс',
				technologies: '[ HTML, JavaScript, Aдаптивний CSS ]',
				text: 'Гра Тетріс створена в рамках марафону "Пишемо гру Тетріс на JS" та зайняла перше місце серед кращих проектів.',
				img: tetris,
				linkProject: 'https://game-tetris-vb.netlify.app/',
				linkGitNub: 'https://gitlab.com/vlad_brodich/project-tetris.git'
			},
			{
				title: 'Мобільний додаток Калькулятор',
				technologies: '[ React Native, Redux ]',
				text: 'Мобільний додаток для андроід який повторює весь функціонал стандартного калькулятора IOS.',
				img: calculator_ios,
				// linkProject: '#',
				linkGitNub: 'https://gitlab.com/vlad_brodich/tpf-45_dev_vb-react-native-redux.git'
			},
			{
				title: 'Проект Бронювання квитків у кіно.',
				technologies: '[ React.js, REST API, Aдаптивний CSS ]',
				text: 'Домашня робота з React.js проект " Бронювання квитків у кіно" - Вивчення методів роботи з Сontext в React. Проект розміщений  серед кращих робіт на сайті школи.',
				img: movie,
				linkProject: 'https://project-cinema-uk-en.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/booking_movie_tickets.git'
			},
			{
				title: 'Онлайн-гра "Сапер."',
				technologies: '[ React.js, Aдаптивний CSS ]',
				text: 'Домашня робота з React.js проєкт "Онлайн-гра "Сапер" - Моє особисте бачення популярної гри в сучасних реаліях. Проект розміщений серед кращих робіт на сайті школи.',
				img: sapper,
				linkProject: 'https://homeork-game-sapper.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_6_game_sapper.git'
			},
			{
				title: 'Таймер.',
				technologies: '[ React, Redux, JavaScript, HTML/Aдаптивний CSS ]',
				text: 'Домашня робота з React.js Redux  "Таймер" - Використання Redux в React проєктах.',
				img: timer,
				linkProject: 'https://homework-react-redux-9-timer.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework-react-redux-timer.git'
			},

			{
				title: 'Інтернет-магазин "Shorts',
				technologies: '[ Семантичний HTML, Aдаптивний CSS, BEM, GIT, JavaScript,REST API ]',
				text: "Домашня робота з JavaScript проект 'Інтернет-магазин' — це чудовий приклад командної роботи, який має на меті показати базові навички роботи з бекендом.",
				img: store_demo,
				linkProject: 'https://store-demo-fe.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homwork_js_internet-shop-shorts.git'
			},
			{
				title: 'Зоряне небо',
				technologies: '[ React.js ]',
				text: 'Домашня робота з React.js проєкт "Зоряне небо" - Космічна тема, багато анімації мені дуже подобаються такі макети.',
				img: starry_sky,
				linkProject: 'https://magenta-youtiao-d965af.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_react_starry-sky.git'
			},
			{
				title: 'Гори Європи',
				technologies: '[ Семантичний HTML, Aдаптивний CSS, JavaScript ]',
				text: "Персональний проект 'Mountains Europe', який має на меті показати базові навички створення семантики та адаптації сайтів під різні пристрої та створення простого слайдера за допомогою JavaScript",
				img: mountains_europe,
				linkProject: 'https://mountains-europe-demo-slider.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/mountains-europe_slider_js.git'
			},
			{
				title: 'Веб-Студія',
				technologies: '[ Семантичний HTML, Aдаптивний CSS, BEM, GIT ]',
				text: 'Персональний проект Веб-Студії, який має на меті показати базові навички створення семантики та адаптації сайтів під різні пристрої',
				img: web_studio,
				linkProject: 'https://web-studio-work-vlad-brodich.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/web-studio_independent_work.git'
			},
			{
				title: 'Записник',
				technologies: '[ React.js ]',
				text: "Домашня робота з React.js проєкт 'Записник' - Створення та редагування списку продуктів.",
				img: notebook_uk,
				linkProject: 'https://ephemeral-klepon-13494c.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_react_3_notebook.git'
			},
			{
				title: 'Онлайн Калькулятор',
				technologies: '[ JavaScript ]',
				text: 'Домашня робота з JavaScript проект «Онлайн калькулятор» - чудовий проект для тренування логічного мислення та знань з математики.',
				img: calculator,
				linkProject: 'https://genuine-starburst-33ab73.netlify.app/',
				linkGitNub: 'https://github.com/Brodich-vlad/homework_js_online-calculator.git'
			}
		],
		btnMore: 'Більше проєктів . . .'
	},
	skills: {
		title: 'Навички',
		skills: [
			{
				title: 'Навички',
				text: [
					'HTML5, CSS3 (SCSS / SASS / LESS), Tailwind CSS',
					'JavaScript Es6+',
					'Type-Script',
					'React.js',
					'React Native',
					'Vue.js',
					'Next.js',
					'Redux',
					'Знання систем контролю версій: Git',
					'Trello',
					'Досвід роботи з REST ful API',
					'Розуміння принципів розробки адаптивного та респонсивного дизайну',
					'Основи UX/UI дизайну',
					'Досвід роботи з інструментами для налаштування середовища розробки - WebPack, Vite',
					'Досвід роботи з бібліотекою управління станом - Zustand',
					'Валідація даних з автоматичною типізацією за допомогою - Zod',
					'Вміння працювати з інструментами розробника (DevTools)'
				]
			},
			{
				title: 'Додаткові навички',
				text: [
					'Висока відповідальність та швидке вивчення нового матеріалу',
					'Гарні комунікативні навички та здатність ефективно працювати в команді',
					'Вміння дотримуватись дедлайнів',
					'Бажання постійно вдосконалюватися та розвивати свої навички'
				]
			},
			{
				title: 'Мови',
				text: ['Українська — Рідна', 'English — Elementary']
			}
		]
	},
	education: {
		title: 'Освіта',
		schools: [
			{
				profession: 'Курс Vue.js Oнлайн',
				school: 'Україна',
				date: 'СІЧЕНЬ 2024 | (1 місяць)'
			},
			{
				profession: 'Курс React Native Oнлайн',
				school: 'Україна',
				date: 'ГРУДЕНЬ 2023 | (1 місяць)'
			},
			{
				profession: 'Курс Type-Script Oнлайн',
				school: 'Україна',
				date: 'ЛИСТОПАД 2023 | (1 місяць)'
			},
			{
				profession: 'Курс Next.js Oнлайн',
				school: 'Україна',
				date: 'ЖОВТЕНЬ 2023 | (2 місяці)'
			},
			{
				profession: 'Front-End Advanced Cursor Онлайн',
				school: 'Школа програмування Cursor, Україна',
				date: 'СЕРПЕНЬ 2023 | (5 місяців)'
			},
			{
				profession: 'Front-End Онлайн',
				school: 'Школа програмування Philip Sevene, Україна',
				date: 'ВЕРЕСЕНЬ 2022 | ЖОВТЕНЬ 2023',
				imgCertificate: certificate_front_end
			},
			{
				profession: 'Англійська з викладачем Онлайн',
				school: 'Школа вивченя Англійської мови Englishdom, Україна',
				date: 'ВЕРЕСЕНЬ 2022 | (9 місяців)',
				imgCertificate: certificate_en
			},
			{
				profession: "Maрафон Java Script' IT Generation' Онлайн",
				school: 'Школа програмування GoIT, Україна',
				date: 'СЕРПЕНЬ 2022 | (4 тижні)'
			},
			{
				profession: 'Курс HTML CSS Oнлайн',
				school: 'Школа програмування GoIT, Україна',
				date: 'ЧЕРВЕНЬ 2022 | (2 місяці)',
				imgCertificate: certificate_html
			},
			{
				profession: 'Інженер-механик',
				school: 'Київський політехнічний інститут',
				date: 'ВЕРЕСЕНЬ 1997 | (5 років)',
				imgCertificate: diploma
			}
		]
	},
	reviews:{
		title: 'Відгуки',
		reviews:[
			{
				title:'feedback',
				img: feedback_1
			},
			{
				title:'feedback',
				img: feedback_2
			},
			{
				title:'feedback',
				img: feedback_3
			},
			{
				title:'feedback',
				img: feedback_4
			},
			{
				title:'feedback',
				img: feedback_5
			},
			{
				title:'feedback',
				img: feedback_6
			},
			{
				title:'feedback',
				img: feedback_7
			},
			{
				title:'feedback',
				img: feedback_8
			}

		],
	},
	contact: {
		title: 'Контакти',
		contacts: [
			{
				contactLogo: phone,
				contact: '+38 (067) 760 65 08',
				href: 'tel:+380677606508'
			},
			{
				contactLogo: mail,
				contact: 'brodich_vlad@ukr.net',
				href: 'mailto:brodich_vlad@ukr.net'
			},
			{
				contactLogo: telegram,
				contact: 't.me/Vlad_Green_Bro',
				href: 'https://t.me/Vlad_Green_Bro'
			},
			{
				contactLogo: in_icon,
				contact: 'https://www.linkedin.com/in/',
				href: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%B1%D1%80%D0%BE%D0%B4%D0%B8%D1%87-3a1a95279/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6BXqQwKdQomR3DVER3%2BjvA%3D%3D'
			},
			{
				contactLogo: github,
				contact: 'GitHub',
				href: 'https://github.com/Brodich-vlad'
			},
			{
				contactLogo: gitlab,
				contact: 'GitLab',
				href: 'https://gitlab.com/vlad_brodich'
			},
			{
				contactLogo: pdf_placeholder,
				contact: 'CV Vlad Brodich',
				href: cv
			}
		]
	}
};
