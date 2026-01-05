const Under = ({ tasks }) => {
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="text-center text-sm text-gray-700 mt-2">
      {completed} of {tasks.length} tasks completed
    </div>
    
  );
};

export default Under;
