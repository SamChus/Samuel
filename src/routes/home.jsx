import React from "react";
import Footer from "../components/Footer.jsx";
import HomeBio from "../components/HomeBio.jsx";


const Home = ({ userTheme }) => {
  return (
    <div className="container max-w-xl md:max-w-[1280px] mx-auto flex flex-col pb-3 md:pb-8 h-screen justify-between text-dark-secondary ">
      <HomeBio userTheme={userTheme} />
      <Footer userTheme={userTheme} />
    </div>
  );
};

export default Home;
