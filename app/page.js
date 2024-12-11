import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>To-Do List</h1>
      <input id="task-input" type="text" placeholder="Enter a task" />
      <button id="add-task-button">Add Task</button>
      <ul id="task-list"></ul>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          padding: 20px;
          background-color: #f4f4f4;
        }
        h1 {
          color: #333;
        }
        input[type="text"] {
          padding: 10px;
          width: 300px;
          margin-right: 10px;
        }
        button {
          padding: 10px 15px;
          background-color: #28a745;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #218838;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          background: #fff;
          margin: 5px 0;
          padding: 10px;
          border: 1px solid #ddd;
          cursor: pointer;
        }
        li:hover {
          background: #f1f1f1;
        }
      `}</style>

      <script>
        {`
          class ToDoList {
              constructor() {
                  this.tasks = [];
                  this.taskInput = document.getElementById('task-input');
                  this.taskList = document.getElementById('task-list');
              }

              addTask() {
                  const task = this.taskInput.value.trim();
                  if (task) {
                      this.tasks.push(task);
                      this.renderTaskList();
                      this.taskInput.value = '';
                  }
              }

              renderTaskList() {
                  this.taskList.innerHTML = '';
                  this.tasks.forEach((task, index) => {
                      const taskElement = document.createElement('li');
                      taskElement.textContent = task;
                      taskElement.addEventListener('click', () => this.removeTask(index));
                      this.taskList.appendChild(taskElement);
                  });
              }

              removeTask(index) {
                  this.tasks.splice(index, 1);
                  this.renderTaskList();
              }
          }

          const toDoList = new ToDoList();

          document.getElementById('add-task-button').addEventListener('click', () => toDoList.addTask());
        `}
      </script>
    </div>
  );
}