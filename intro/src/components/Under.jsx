const Under = ({ tasks }) => {
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="text-center text-sm text-gray-700 mt-2">
      {completed} completed / {tasks.length} total
    </div>
  );
};

export default Under;

