import Sport from "../components/Sport";
import SportInfo from "../components/SportInfo";
import Header from "../layouts/Header";
import SportData from "../components/SportData";
import CryptoNews from "../components/CryptoNews";
import CryptoNewsData from "../components/CryptoNewsData";
import MemeColections from "../components/MemeColections";
import MemeColectionsData from "../components/MemeColectionsData";
import TradingAnalysis from "../components/TradingAnalysis";
import AboutUs from "../components/AboutUs";
import Categories from "../components/Categories";
import CategoriesData from "../components/CategoriesData";
import VideoCourses from "../components/VideoCourses";
import coursesData from "../components/coursesData";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div className="max-w-[1920px]">
      <Header />
      <SportInfo />
      <Categories categoriesData={CategoriesData} />
      <Sport sportsData={SportData} />
      <CryptoNews newsData={CryptoNewsData} />
      <MemeColections newsData={MemeColectionsData} />
      <TradingAnalysis />
      <AboutUs />
      <VideoCourses coursesData={coursesData} />
      <ContactUs />
    </div>
  );
};

export default HomePage;
