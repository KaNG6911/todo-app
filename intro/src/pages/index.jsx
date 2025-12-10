import { Body } from "@/components/Body";
import { Under } from "@/components/Under";

const Home = () => {
  return (
    <div className="flex w-[500] h-[350] bg-white pb-4 pt-6 gap-7 items-center flex-col rounded-4xl">
      <h1 className="text-3xl font-bold">To-Do list</h1>
      <Body />
      {/* <div className="">
        <ParentAAB />
      </div> */}
      {<Under />}
      <h4>
        Powered by <span className="text-blue-500">Pinecone academy</span>
      </h4>
    </div>
  );
};
export default Home;
