const ActiveBut = ({ filter, setFilter }) => {
  const curryFilter = (val) => () => setFilter(val);

  return (
    <button
      onClick={curryFilter("active")}
      className={
        filter === "active"
          ? "px-2.5 py-1.5 rounded bg-blue-500 text-white text-[12px]"
          : "px-2.5 py-1.5 rounded bg-gray-200 text-[12px]  text-gray-600"
      }
    >
      Active
    </button>
  );
};

export default ActiveBut;
