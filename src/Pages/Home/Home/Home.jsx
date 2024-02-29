import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Feature from "../Feature/Feature";
import MiddleSection from "../MiddleSection/MiddleSection";
import TopRider from "../TopRider/TopRider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - GoFast</title>
      </Helmet>
      <Banner></Banner>
      <Feature></Feature>
      <MiddleSection></MiddleSection>
      <TopRider></TopRider>
      <Faq></Faq>
    </div>
  );
};

export default Home;
