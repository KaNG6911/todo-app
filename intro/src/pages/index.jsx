import { Body } from "@/components/Body";
import { All } from "@/components/All";
import { ActiveBut } from "@/components/ActiveBut";
import { CompBut } from "@/components/CompBut";
import { Under } from "@/components/Under";

const Home = () => {
  return (
    <div className="flex w-[500] h-[350] bg-white pb-4 pt-6 gap-7 items-center flex-col rounded-4xl">
      <h1 className="text-3xl font-bold">To-Do list</h1>
      <Body />
      <div className="flex gap-3  w-[450] justify-start items-start">
        <All />
        <ActiveBut />
        <CompBut />
      </div>
      <Under />
      <h4>
        Powered by <span className="text-blue-500">Pinecone academy</span>
      </h4>
    </div>
  );
};
export default Home;
