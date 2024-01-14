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