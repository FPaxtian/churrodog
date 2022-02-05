import React from "react";
import "./css/one.css";
import FourthSection from '../components/_fourth_section';
import ThirdSection from '../components/_third_section';
import SecondSection from '../components/_second_section';
import FirstSection from '../components/_first_section';

const Home = () => {
  return (

    <div className="one ">
      {/* first section */}
      <FirstSection />

      {/* second section */}
      <hr className="salto" />
      <SecondSection />

      {/* third section */}
      <hr className="salto" />
      <ThirdSection />

      {/* fourth section */}
      <hr className="salto" />
      <FourthSection />

    </div>
  );
};
export default Home;
