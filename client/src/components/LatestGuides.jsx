import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLatestGuides } from "../api/homeAPI";
import Loader from "./Loader";
import InteractiveDog from "./InteractiveDog";

const LatestGuides = () => {
  const navigate = useNavigate();
  const [guideData, setGuideData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const guideDataLoader = async () => {
      try {
        setLoader(true);
        const res = await fetchLatestGuides();
        setGuideData(res.data.data);
      } catch (error) {
        console.log("Error while loading featured games:", error);
      } finally {
        setLoader(false);
      }
    };
    guideDataLoader();
  }, []);

  return (
    <section className="bg-[#0F1A24] text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Latest Guides</h2>
      {loader && <Loader />}
      {guideData.length <= 0 && !loader && (
        <div className="text-center text-gray-400 py-12">
          <div className="text-5xl mb-4 flex justify-center items-center">
            <InteractiveDog width={8} height={8} />
          </div>
          <h2 className="text-xl font-semibold mb-2">No guids available</h2>
          <p className="text-sm text-gray-500">
            Check back later to see newly added guides.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-10">
        {guideData.map((guide) => (
          <div
            key={guide.id}
            onClick={() => navigate(`/guide/${guide.slug}`)}
            className="flex flex-col sm:flex-row sm:items-start gap-6 cursor-pointer border-b"
          >
            {/* Text Content */}
            <div className="flex-1">
              <p className="text-gray-400 text-sm mb-1">{guide.game}</p>
              <h3 className="text-lg sm:text-xl font-semibold">
                {guide.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1">
                {guide.description}
              </p>
            </div>

            {/* Thumbnail */}
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full sm:w-[200px] h-[140px] object-cover rounded-lg rounded-b-none pb-1"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestGuides;
