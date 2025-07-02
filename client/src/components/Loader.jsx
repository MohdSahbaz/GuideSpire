const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-32">
      {/* Spinner with glow */}
      <div className="w-10 h-10 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin shadow-lg ring-2 ring-cyan-500 ring-offset-2" />

      {/* Static message */}
      <p className="mt-2 text-sm text-cyan-300 animate-pulse">
        Loading magic… ✨
      </p>
    </div>
  );
};

export default Loader;
