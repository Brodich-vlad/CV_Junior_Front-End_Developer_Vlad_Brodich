// Функція повертає масив з трьох перших обє'ктів.
export function mainProjects (data){
  let projects =[];
  for (let i = 0; i < 5; i++) {
    projects.push(data[i])
  }
  return projects 
};