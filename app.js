let todos = [];
let currentIndex = -1;

const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-button");
const todoInput = document.getElementById("todoInput");
const saveBtn = document.querySelector(".modal-content button");

addBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.getElementById("modalTitle").innerText = "Add Todo";
  todoInput.value = "";
  currentIndex = -1;
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

saveBtn.addEventListener("click", saveTodo);

function saveTodo() {
  const todoText = todoInput.value;
  if (todoText.trim() === "") return;

  if (currentIndex === -1) {
    todos.push(todoText);
  } else {
    todos[currentIndex] = todoText;
  }

  modal.style.display = "none";
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  currentIndex = index;
  modal.style.display = "block";
  document.getElementById("modalTitle").innerText = "Edit Todo";
  todoInput.value = todos[index];
}

function renderTodos() {
  const listElement = document.getElementById("todoList");
  listElement.innerHTML = "";

  todos.forEach((todo, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<span>${todo}</span>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTodo(index));

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => editTodo(index));

    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    listElement.appendChild(card);
  });
}

renderTodos();
