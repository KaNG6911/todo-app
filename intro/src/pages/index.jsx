import Body from "@/components/Body";

const Home = () => {
  return (
    <div className="flex w-[400px] bg-white pb-5 pt-6 gap-7 items-center flex-col rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold">To-Do list</h1>
      <Body />
      <footer className="flex text-gray-500 text-[13px] gap-1">
        Powered by <nav className="text-blue-500">Pinecone academy</nav>
      </footer>
    </div>
  );
};

export default Home;
