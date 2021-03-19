let todoItems = []
const form = document.querySelector(".js-form")
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    const input = document.querySelector(".js-todo-input")
    const holdValue = input.value.trim();
    addTodo(holdValue);
});

function addTodo(holdValue){
    todoItems.push(holdValue);
    renderTodo();
}

function renderTodo(){
    const list = document.querySelector(".js-todo-list")
    const node = document.createElement()
}