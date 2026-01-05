const All = ({ filter, setFilter }) => {
  const curryFilter = (val) => () => setFilter(val);


  return (
    <button
   
      onClick={curryFilter("all")}
      className={
        filter === "all"
          ? "px-4 py-2 rounded bg-blue-500 text-white"
          : "px-4 py-2 rounded bg-gray-200"
      }
    >
      All
    </button>
  );
};

export default All;



