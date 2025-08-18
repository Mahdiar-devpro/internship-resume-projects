const ul = document.querySelector("ul");
const input = document.querySelector("#input");

function add() {
  if (input.value.trim() === "") return;
  const listItem = document.createElement("li");

  const icon = document.createElement("i");
  icon.className = "bx bx-circle";

  const taskTitle = document.createElement("p");
  taskTitle.innerHTML = input.value;

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "DELETE";
  delBtn.className = "delete";

  listItem.appendChild(icon);
  listItem.appendChild(taskTitle);
  listItem.appendChild(delBtn);

  ul.appendChild(listItem);

  input.value = "";
  saveData();
}
ul.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "I") {
    e.target.classList.toggle("bx-circle");
    e.target.classList.toggle("bx-check-circle");
    e.target.parentElement.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "P") {
    const icon = e.target.previousElementSibling;
    icon.classList.toggle("bx-circle");
    icon.classList.toggle("bx-check-circle");
    e.target.parentElement.classList.toggle("checked");
    saveData();
  }
});
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});
function saveData() {
  localStorage.setItem("todoList", ul.innerHTML);
}
function showData() {
  ul.innerHTML = localStorage.getItem("todoList") || "";
}
showData();