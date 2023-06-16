// Функція створення ID або Key.
export function getId(num){
    const ABC = "AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz";
    const NUMBERS = "0123456789";
    const LETTERS = ABC + NUMBERS;
    let newId= "";
    for (let i = 0; i < 8; i++) {
        newId += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
    newId +=  `_${num}`;
    return newId;
}

// Функція повертає масив з трьох перших обє'ктів.
export function mainProjects (data){
    let projects =[];
    for (let i = 0; i < 3; i++) {
        projects.push(data[i])
    }
    return projects 
}
// Функція повертає масив з всіх інших обє'ктів.
export function secondProjects (data){
    let projects =[];
    for (let i = 0; i < data.length; i++) {
        if(i > 2){
            projects.push(data[i])
        }
    }
    return projects 
}