import { useState } from "react";
import CompBut from "./CompBut";
import Under from "./Under";

const Body = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // all | active | completed

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirm) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <div className="w-90 flex flex-col gap-4">
      {/* Input + Add */}
      <div className="flex gap-2">
        <input
          className="flex-1 border-gray-300 border p-2 rounded outline-none text-sm"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <CompBut filter={filter} setFilter={setFilter} />

      <div className="flex flex-col gap-4">
        {filteredTasks.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(t.id)}
                className="w-5 h-5"
              />
              <span className={t.completed ? "line-through " : ""}>
                {t.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 bg-red-50 pl-2 pr-2 p-1 rounded-sm text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <Under tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Body;
