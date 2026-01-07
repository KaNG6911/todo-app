const Under = ({ tasks, setTasks }) => {
  const completed = tasks.filter((t) => t.completed).length;
  if (tasks.length === 0)
    return (
      <div className="text-center text-gray-400 text-[17px]">
        No tasks yet. Add one above!
      </div>
    );

  return (
    <div>
      <hr className="mt-2 pb-4 text-gray-300" />
      <footer className="flex justify-between">
        <div className="text-start text-gray-500 text-sm font-medium">
          {completed} of {tasks.length} tasks completed
        </div>
        <button
          onClick={() => {
            const confirm = window.confirm(
              "Are you sure you want to clear all completed tasks?"
            );
            if (confirm) {
              setTasks(tasks.filter((t) => !t.completed));
            }
          }}
          className="text-red-500 text-sm font-medium"
        >
          Clear Completed
        </button>
      </footer>
    </div>
  );
};

export default Under;
