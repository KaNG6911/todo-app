export const CompBut = ({ active, setActive }) => {
  return (
    <button
      onClick={setActive}
      className={`flex w-25 h-11 rounded-[8] justify-center items-center ${
        active ? "bg-blue-500 text-white " : "bg-gray-200"
      }`}
    >
      Complete
    </button>
  );
};
