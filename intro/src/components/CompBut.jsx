
import All from "./All";
import ActiveBut from "./ActiveBut";
import Completed from "./Completed";

const CompBut = ({ filter, setFilter }) => {
  return (

    <div className="flex gap-3 ">
      <All filter={filter} setFilter={setFilter} />
      <ActiveBut filter={filter} setFilter={setFilter} />
      <Completed filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default CompBut;