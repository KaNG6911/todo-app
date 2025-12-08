import { useState } from "react";
import { All } from "./All";
import { ActiveBut } from "./ActiveBut";
import { CompBut } from "./CompBut";

export default function FilterButtons() {
  const [avtiveFilter, setActiveFilter] = useState("All");
  return (
    <div>
      <All
        active={activeFilter === "All"}
        setActive={() => setActiveFilter("All")}
      />
      <ActiveBut
        active={activeFilter === "Active"}
        setActive={() => setActiveFilter("Active")}
      />
      <CompBut
        active={activeFilter === "Complete"}
        setActive={() => setActiveFilter("Complete")}
      />
    </div>
  );
}
