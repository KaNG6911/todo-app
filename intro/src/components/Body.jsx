export const Body = () => {
  return (
    <div className="flex gap-4">
      <input
        className="w-90 h-14 pl-4 border-gray-400 border-2 rounded-[8]"
        type="text"
        placeholder="Add a new task..."
      />
      <button className="bg-blue-500 w-18 h-14 rounded-[8] text-white font-bold">
        Add
      </button>
    </div>
  );
};
