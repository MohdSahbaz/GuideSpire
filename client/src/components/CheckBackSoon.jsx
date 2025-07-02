import InteractiveDog from "./InteractiveDog";

const CheckBackSoon = () => {
  return (
    <div className="min-h-[calc(100vh-145px)] flex flex-col items-center justify-center bg-[#0F1A24] text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-4 flex flex-col items-center">
        <InteractiveDog width={16} height={16} />
        <span className="mt-2">WIP</span>
      </h1>
      <h2 className="text-2xl font-semibold mb-2">
        This page is still under construction
      </h2>
      <p className="mb-6 text-gray-300">
        We're building something awesome here. Pet the dog while you wait!
      </p>
    </div>
  );
};

export default CheckBackSoon;
