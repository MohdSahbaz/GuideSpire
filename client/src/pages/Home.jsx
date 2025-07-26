import HomeBanner from "@components/HomeBanner";
import FeaturedGames from "@components/FeaturedGames";
import LatestGuides from "@components/LatestGuides";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <FeaturedGames />
      {/* <LatestGuides /> */}
    </div>
  );
};

export default Home;
