import Body from "@/components/Body";

const Home = () => {
  return (
    <div className="flex w-[440] h-[350] bg-white pb-4 pt-6 gap-7 items-center flex-col rounded-4xl">
      <h1 className="text-3xl font-bold">To-Do list</h1>
      <Body />
      <footer className="flex text-gray-500 text-[13px] gap-1">
        Powered by <nav>Pinecone academy</nav>
      </footer>
    </div>
  );
};

export default Home;
