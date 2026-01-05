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
    setTasks(tasks.filter((t) => t.id !== id));
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
    <div className="w-100 flex flex-col gap-4">
      {/* Input + Add */}
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          placeholder="Add task..."
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

      <div className="flex flex-col gap-2">
        {filteredTasks.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(t.id)}
              />
              <span className={t.completed ? "line-through text-gray-500" : ""}>
                {t.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </div>
        ))}
      </div>

      <Under tasks={tasks} />
    </div>
  );
};

export default Body;
