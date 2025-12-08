import { useState } from "react";

export const All = () => {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => setActive(!active)}
      className={`flex w-13 h-11 rounded-[8] justify-center items-center ${
        active ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
    >
      All
    </button>
  );
};
