const Completed = ({ filter, setFilter }) => {
  const curryFilter = (val) => () => setFilter(val);

  return (
    <button
      onClick={curryFilter("completed")}
      className={
        filter === "completed"
          ? "px-4 py-2 rounded bg-blue-500 text-white"
          : "px-4 py-2 rounded bg-gray-200"
      }
    >
      Completed
    </button>
  );
};

export default Completed;
