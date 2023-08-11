
import my_photo from "../img/my_photo.jpg";
import mountains_europe from "../img/projects/mountains-europe.jpg";
import web_studio from "../img/projects/web-studio.jpg";
import store_demo from "../img/projects/store-demo.png";
import calculator from "../img/projects/calculator.jpg";
import barber_shop from "../img/projects/barber_shop.jpg";
import starry_sky from "../img/projects/homework_react_starry_sky.png";
import notebook_en from "../img/projects/homework__notebook_en.jpg";
import notebook_uk from "../img/projects/homework_notebook_uk.jpg";
import dream_pizza from "../img/projects/dream-pizza.jpg";
import sapper from "../img/projects/homework_react_sapper.jpg";
import movie from "../img/projects/movie_tickets.png";
import timer from "../img/projects/timer.png";

import phone from "../img/svg-icon/phone.svg";
import mail from "../img/svg-icon/e-mail_black.svg";
import telegram from "../img/svg-icon/telegram_icon.svg";
import in_icon from "../img/svg-icon/in_black.svg";


import certificate_en from "../img/certificates/certificate_en.jpg";
import certificate_html from "../img/certificates/certificate_html.jpg";


export const summaryEng = {
    langPage: "en",
    name: 'Vlad Brodych',
    profession: 'Front-End Developer',
    photo: my_photo,
    about: {
        title: 'About Me',
        text: "Hi, I'm Vlad. I like programming because you are constantly looking for solutions to non-trivial problems. Programming also offers opportunities for endless development, which only inspires me. During my studies, I easily solved all the tasks set before me, and also gained experience in teamwork. I quickly adapt to any technology on the projects, because it is very interesting to me.",
    },
    projects: {
        title: 'Projects',
        projects: [
            {
                title: 'Project Booking movie tickets.',
                technologies: "[ React.js, Adaptive CSS ]",
                text: 'Homework with React.js project " Booking movie tickets" - Learning methods of working with Сontext in React.',
                img: movie,
                linkProject: 'https://homework-react-8-sinema.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/booking_movie_tickets.git',
            },

            {
                title: 'Online game "Sapper."',
                technologies: "[ React.js, Adaptive CSS ]",
                text: 'Homework with React.js project "Online game "Sapper" - My personal vision of a popular game in modern realities.',
                img: sapper,
                linkProject: 'https://homeork-game-sapper.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_6_game_sapper.git',
            },

            {
                title: 'Timer.',
                technologies: "[ React, Redux, JavaScript, HTML/Adaptive CSS ]",
                text: 'Homework with React.js Redux  "Тimer" - Using Redux in React projects.',
                img: timer,
                linkProject: 'https://homework-react-redux-9-timer.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework-react-redux-timer.git',
            },
            {
                title: 'Internet-shop "Shorts"',
                technologies: "[ Semantic HTML, Adaptive CSS, BEM, GIT, JavaScript ]",
                text: "JavaScript Homework The Online Store project is a great example of teamwork that aims to demonstrate basic backend skills.",
                img: store_demo,
                linkProject: 'https://store-demo-fe.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homwork_js_internet-shop-shorts.git',
            },
            {
                title: 'Starry sky',
                technologies: "[ React.js ]",
                text: 'Homework with React.js project "Starry sky" - Space theme, lots of animations, I really like layouts like this.',
                img: starry_sky,
                linkProject: 'https://magenta-youtiao-d965af.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_react_starry-sky.git',
            },
            {
                title: 'Mountains Europe',
                technologies: "[ Semantic HTML, Adaptive CSS, BEM, GIT, JavaScript ]",
                text: "Personal project 'Mountains Europe', which aims to show the basic skills of creating semantics and adapting sites for different devices and creating a simple slider using JavaScript",
                img: mountains_europe,
                linkProject: 'https://mountains-europe-demo-slider.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/mountains-europe_slider_js.git',
            },
            {
                title: 'Web Studio',
                technologies: "[ Semantic HTML, Adaptive CSS, BEM, GIT ]",
                text: "A personal web studio project, which aims to show the basic skills of creating semantics and adapting to different devices' sites",
                img: web_studio,
                linkProject: 'https://web-studio-work-vlad-brodich.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/web-studio_independent_work.git',
            },
            {
                title:'Notebook',
                technologies: "[ React.js ]",
                text: "Homework with React.js pr. 'Notebook' - Creating and editing a list of products.",
                img: notebook_en,
                linkProject: 'https://ephemeral-klepon-13494c.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_react_3_notebook.git',
            },
            {
                title: 'Online Calculator',
                technologies: "[ JavaScript ]",
                text: "Homework with JavaScript project 'Online calculator' is a great project for training logical thinking and knowledge of mathematics.",
                img: calculator,
                linkProject: 'https://genuine-starburst-33ab73.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_js_online-calculator.git',
            },
            {
                title: 'Dream Pizza',
                technologies: "[ JavaScript ]",
                text: 'Homework with JavaScript project "Pizza of dreams" - Studying the events of dragging and dropping images in JavaScript.',
                img: dream_pizza,
                linkProject: 'https://thunderous-kataifi-d1d2fa.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_js_dream-pizza.git',
            },
            {
                title: 'Barbershop',
                technologies: "[ HTML, CSS Аnimation, BOOTSTRAP ]",
                text: 'Homework with HTML project "Barbershop" - learning CSS animation and familiarization with the BOOTSTRAP library.',
                img: barber_shop,
                linkProject: 'https://peaceful-tartufo-7aeff8.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_html_Barbershop.git',
            },
        ],
        btnMore: 'More projects . . .',
    },
    skills: {
        title: 'Skills',
        skills: [
            {
                title: 'Skills',
                text: ['React.js','JavaScript Es6+, Ajax','HTML5, CSS3 (SCSS / SASS / LESS), Adaptiv design','Redux','GIT, git-flow','REST API, HTTP, JSON','Figma','Material UI','Jest, React-testing-library'],
            },
            {
                title: 'Soft Skills',
                text: ['Teamwork','Ability to adhere to deadlines','Responsibility and discipline'],
            },
            {
                title: 'Languages',
                text: ['Ukrainian — Native','English — Elementary'],
            }
        ]
    },
    education: {
        title: 'Education',
        schools: [
            {
                profession: 'Front-End Online',
                school: 'Programming school Philip Sevene, Ukraine',
                date: 'SEPTEMBER 2022 | (until now)',
            },
            {
                profession: 'English with a teacher Online',
                school: 'English school Englishdom, Ukraine',
                date: 'SEPTEMBER 2022 | (until now)',
                imgCertificate: certificate_en,
            },
            {
                profession: "Marathon Java Script' IT Generation' Online",
                school: 'Programming school GoIT, Ukraine',
                date: 'AUGUST 2022 (4 weeks)',
            },
            {
                profession: 'Course HTML CSS Online',
                school: 'Programming school GoIT, Ukraine',
                date: 'JUNE 2022 (2 months)',
                imgCertificate: certificate_html,
            },
        ]
    },
    contact: {
        title: 'Contact',
        contacts: [
            {
                contactLogo: phone,
                contact: '+38 (067) 760 65 08',
                href: 'tel:+380677606508',
            },
            {
                contactLogo: mail,
                contact: 'brodich_vlad@ukr.net',
                href: 'mailto:brodich_vlad@ukr.net',
            },
            {
                contactLogo: telegram,
                contact: 't.me/Vlad_Green_Bro',
                href: 'https://t.me/Vlad_Green_Bro',
            },
            {
                contactLogo: in_icon,
                contact: 'https://www.linkedin.com/in/',
                href: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%B1%D1%80%D0%BE%D0%B4%D0%B8%D1%87-3a1a95279/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6BXqQwKdQomR3DVER3%2BjvA%3D%3D',
            },
        ]
    }
}


export const summaryUk = {
    langPage: "uk",
    name: 'Влад Бродич',
    profession: 'Front-End Розробник',
    photo: my_photo,
    about: {
        title: 'Про мене',
        text: "Привіт, я Влад. Мені подобається програмування, тому що ти постійно шукаєш рішення нетривіальних задач. Програмування також дає можливості нескінченного розвитку, що мене тільки надихає. За час навчання я легко вирішував всі поставлені переді мною завдання, а також набув досвіду командної роботи. Швидко підлаштовуюся під будь-які технології на проектах, тому що це мені дуже цікаво.",
    },
    projects: {
        title: 'Проєкти',
        projects: [
            {
                title: 'Проект Бронювання квитків у кіно.',
                technologies: "[ React.js, Aдаптивний CSS ]",
                text: 'Домашня робота з React.js проект " Бронювання квитків у кіно" - Вивчення методів роботи з Сontext в React.',
                img: movie,
                linkProject: 'https://homework-react-8-sinema.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/booking_movie_tickets.git',
            },
            {
                title: 'Онлайн-гра "Сапер."',
                technologies: "[ React.js, Aдаптивний CSS ]",
                text: 'Домашня робота з React.js прєкт "Онлайн-гра "Сапер" - Моє особисте бачення популярної гри в сучасних реаліях.',
                img: sapper,
                linkProject: 'https://homeork-game-sapper.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_6_game_sapper.git',
            },
            {
                title: 'Таймер.',
                technologies: "[ React, Redux, JavaScript, HTML/Aдаптивний CSS ]",
                text: 'Домашня робота з React.js Redux  "Таймер" - Використання Redux в React прєктах.',
                img: timer,
                linkProject: 'https://homework-react-redux-9-timer.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework-react-redux-timer.git',
            },

            {
                title: 'Інтернет-магазин "Shorts',
                technologies: "[ Семантичний HTML, Aдаптивний CSS, BEM, GIT, JavaScript ]",
                text: "Домашня робота з JavaScript проект 'Інтернет-магазин' — це чудовий приклад командної роботи, який має на меті показати базові навички роботи з бекендом.",
                img: store_demo,
                linkProject: 'https://store-demo-fe.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homwork_js_internet-shop-shorts.git',
            },
            {
                title: 'Зоряне небо',
                technologies: "[ React.js ]",
                text: 'Домашня робота з React.js прєкт "Зоряне небо" - Космічна тема, багато анімації мені дуже подобаються такі макети.',
                img: starry_sky,
                linkProject: 'https://magenta-youtiao-d965af.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_react_starry-sky.git',
            },
            {
                title: 'Гори Європи',
                technologies: "[ Семантичний HTML, Aдаптивний CSS, BEM, GIT, JavaScript ]",
                text: "Персональний проект 'Mountains Europe', який має на меті показати базові навички створення семантики та адаптації сайтів під різні пристрої та створення простого слайдера за допомогою JavaScript",
                img: mountains_europe,
                linkProject: 'https://mountains-europe-demo-slider.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/mountains-europe_slider_js.git',
            },
            {
                title: 'Веб-Студія',
                technologies: "[ Семантичний HTML, Aдаптивний CSS, BEM, GIT ]",
                text:"Персональний проект Веб-Студії, який має на меті показати базові навички створення семантики та адаптації сайтів під різні пристрої",
                img: web_studio,
                linkProject: 'https://web-studio-work-vlad-brodich.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/web-studio_independent_work.git',
            },
            {
                title: 'Записник',
                technologies: "[ React.js ]",
                text: "Домашня робота з React.js прєкт 'Записник' - Створення та редагування списку продуктів.",
                img: notebook_uk,
                linkProject: 'https://ephemeral-klepon-13494c.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_react_3_notebook.git',
            },
            {
                title: 'Онлайн Калькулятор',
                technologies: "[ JavaScript ]",
                text: "Домашня робота з JavaScript проект «Онлайн калькулятор» - чудовий проект для тренування логічного мислення та знань з математики.",
                img: calculator,
                linkProject: 'https://genuine-starburst-33ab73.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_js_online-calculator.git',
            },
            {
                title: 'Піца мрії',
                technologies: "[ JavaScript ]",
                text: 'Домашня робота з JavaScript проект "Піца мрії" - Вивчення подій перетягування картинок в JavaScript.',
                img: dream_pizza,
                linkProject: 'https://thunderous-kataifi-d1d2fa.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_js_dream-pizza.git',
            },
            {
                title: 'Barbershop',
                technologies: "[  Семантичний HTML, Aнімація CSS, BOOTSTRAP ]",
                text: "Домашня робота з HTML проект «Barbershop» - вивчення CSS анімації та ознайомлення з бібліотекою BOOTSTRAP",
                img: barber_shop,
                linkProject: 'https://peaceful-tartufo-7aeff8.netlify.app/',
                linkGitNub: 'https://github.com/Brodich-vlad/homework_html_Barbershop.git',
            },
        ],
        btnMore: 'Більше проєктів . . .',
    },
    skills: {
        title: 'Навички',
        skills: [
            {
                title: 'Навички',
                text: ['React.js','JavaScript Es6+, Ajax','HTML5, CSS3 (SCSS / SASS / LESS), Adaptiv design','Redux','GIT, git-flow','REST API, HTTP, JSON','Figma','Material UI','Jest, React-testing-library'],
            },
            {
                title: "М'які навички",
                text: ['Командна робота','Вміння дотримуватись дедлайнів','Відповідальність та дисциплінованість'],
            },
            {
                title: 'Мови',
                text: ['Українська — Рідна','English — Elementary'],
            }
        ]
    },
    education: {
        title: 'Освіта',
        schools: [
            {
                profession: 'Front-End Онлайн',
                school: 'Школа програмування Philip Sevene, Україна',
                date: 'ВЕРЕСЕНЬ 2022 | (по теперішній час)',
            },
            {
                profession: 'Англійська з викладачем Онлайн',
                school: 'Школа вивченя Англійської мови Englishdom, Україна',
                date: 'ВЕРЕСЕНЬ 2022 | (по теперішній час)',
                imgCertificate: certificate_en,
            },
            {
                profession: "Maрафон Java Script' IT Generation' Онлайн",
                school: 'Школа програмування GoIT, Україна',
                date: 'СЕРПЕНЬ 2022 (4 тижні)',
            },
            {
                profession: 'Курс HTML CSS Oнлайн',
                school: 'Школа програмування GoIT, Україна',
                date: 'ЧЕРВЕНЬ 2022 (2 місяці)',
                imgCertificate: certificate_html,
            },
        ]
    },
    contact: {
        title: 'Контакти',
        contacts: [
            {
                contactLogo: phone,
                contact: '+38 (067) 760 65 08',
                href: 'tel:+380677606508',
            },
            {
                contactLogo: mail,
                contact: 'brodich_vlad@ukr.net',
                href: 'mailto:brodich_vlad@ukr.net',
            },
            {
                contactLogo: telegram,
                contact: 't.me/Vlad_Green_Bro',
                href: 'https://t.me/Vlad_Green_Bro',
            },
            {
                contactLogo: in_icon,
                contact: 'https://www.linkedin.com/in/',
                href: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%B1%D1%80%D0%BE%D0%B4%D0%B8%D1%87-3a1a95279/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6BXqQwKdQomR3DVER3%2BjvA%3D%3D',
            },
        ]
    }
}