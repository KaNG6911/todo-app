

const ActiveBut = ({ filter, setFilter }) => {
  const curryFilter = (val) => () => setFilter(val);

  return (
    <button
      onClick={curryFilter("active")}
      className={
        filter === "active"
          ? "px-4 py-2 rounded bg-blue-500 text-white"
          : "px-4 py-2 rounded bg-gray-200"
      }
    >
      Active
    </button>
  );
};

export default ActiveBut;

