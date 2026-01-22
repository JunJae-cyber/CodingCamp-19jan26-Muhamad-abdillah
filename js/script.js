const form = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const dateInput = document.getElementById('dateInput');
const todoList = document.getElementById('todoList');
const filter = document.getElementById('filter');


let todos = [];


form.addEventListener('submit', function (e) {
e.preventDefault();

if (todoInput.value === '' || dateInput.value === '') {
alert('Input tidak boleh kosong!');
return;
}


const todo = {
text: todoInput.value,
date: dateInput.value
};


todos.push(todo);
todoInput.value = '';
dateInput.value = '';


renderTodos();
});


filter.addEventListener('change', renderTodos);


function renderTodos() {
todoList.innerHTML = '';
const today = new Date().toISOString().split('T')[0];


todos.forEach((todo, index) => {
if (
filter.value === 'today' && todo.date !== today ||
filter.value === 'future' && todo.date <= today
) return;

const li = document.createElement('li');
li.innerHTML = `
<span>${todo.text} <br><small>${todo.date}</small></span>
<button class="delete" onclick="deleteTodo(${index})">Hapus</button>
`;
todoList.appendChild(li);
});
}


function deleteTodo(index) {
todos.splice(index, 1);
renderTodos();
}