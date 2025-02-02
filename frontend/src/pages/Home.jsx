import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopWorkers from "../components/TopWorkers";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopWorkers />
    </div>
  );
};

export default Home;
