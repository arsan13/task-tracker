import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Playstation time",
      day: "Feb 10 at 3pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Assessment",
      day: "Feb 12 at 3pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Haircut",
      day: "Feb 20 at 3pm",
      reminder: false,
    },
  ]);

  // Add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newtask = { id, ...task };
    setTask([...tasks, newtask]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/*ternary without an else */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
