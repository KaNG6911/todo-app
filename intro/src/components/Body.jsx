import { useState } from "react";

export const Body = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-90 h-14 pl-4 border-gray-400 border-2 rounded-[8]"
          type="text"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 w-18 h-14 rounded-[8] text-white font-bold"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => {
          <li
            key={todo.id}
            className="flex w-80 h-20 items-center bg-slate-100 border border-gray-200 rounded-[8]"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                setTodos(
                  todo.map((t) => {
                    t.id === todo.id ? { ...t, completed: !t.completed } : t;
                  })
                );
              }}
              className=" mr-2 h-5 w-5 text-blue-600"
            />
            <span
              className={`grow ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
          </li>;
        })}
      </ul>
    </div>
  );
};
