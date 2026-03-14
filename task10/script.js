const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const colors = [
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
];
addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.textContent = taskText;
  li.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  li.addEventListener("click", () => {
    taskList.removeChild(li);
  });
  taskList.appendChild(li);
  taskInput.value = "";
});
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});
