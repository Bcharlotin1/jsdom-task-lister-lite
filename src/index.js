document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.getElementById("create-task-form");
  const addToList = document.getElementById("tasks");

  form.addEventListener("submit", handleSubmit);
  
  function handleSubmit(event) {
    event.preventDefault();

    let item = document.getElementById("new-task-description").value

    addToList.innerHTML += `
    <li class= "item">${item} </li>
    <button class ="item-button"> Delete </button>

    `
   const buttons = document.getElementsByClassName("item-button")

  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", deleteButton)
  }

  function deleteButton(event) {
    event.target.parentElement.remove()
    
  }
  }

  
  

});
