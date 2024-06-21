import Banner from "../../components/Banner";
import EnjoyTVSection from "../../components/EnjoyTVSection";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions";
import GetStandardPlan from "../../components/GetStandardPlan";
import WatchEverywhere from "../../components/WatchEverywhere";

const Home = () => {
  return (
    <div>
      <Banner />
      <GetStandardPlan />
      <EnjoyTVSection />
      <WatchEverywhere />
      <FrequentlyAskedQuestions/>
    </div>
  );
};

export default Home;
