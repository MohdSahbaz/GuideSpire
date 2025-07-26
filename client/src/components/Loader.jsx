const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-32">
      {/* Static message */}
      <p className="mt-2 text-sm text-cyan-300 animate-pulse">
        Loading data… ✨
      </p>
    </div>
  );
};

export default Loader;
