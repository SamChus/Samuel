import React from "react";
import Button from "../components/Button.jsx";
import profile from "../images/sam-shaped.png";
// import profile from "../images/sam.jpeg";

const HomeBoi = ({ userTheme }) => {
  return (
    <div className=" w-full my-auto bg-white flex justify-center align-middle flex-col dark:bg-dim ">
      <img
        className="item w-[120px] md:w-[180px] mx-auto rounded-full mb-4 md:mb-8"
        src={profile}
        alt="Samuel Chukwuma"
      />

      <div className="max-w-[650px] mx-auto text-center px-6 ">
        <p className="item text-3xl md:text-4xl text-dark font-semibold dark:text-imagination">
          Hello, I am <span className="fancy-text">Samuel Chukwuma.</span>
        </p>

        {userTheme === "dark" ? (
          <div className="description">
            <p className="item mt-2 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
              A <span className="highlight two">software engineer</span> with
              equal love for{" "}
              <span className="highlight">
                design and solving problems using frontend technology.
              </span>{" "}
              I like to describe myself as an{" "}
              <span className="highlight">explorer</span>, eager to learn{" "}
              <span className="highlight">something new</span>. I build{" "}
              <span className="highlight"> interactive web</span> experiences
              using modern web technology and{" "}
              <span className="highlight ">enjoy sharing</span> what I know.
            </p>
          </div>
        ) : (
          <div className="description-dark">
            <p className="item mt-2 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
              A <span className="highlight two">software engineer</span> with
              equal love for{" "}
              <span className="highlight">
                design and solving problems using frontend technology.
              </span>{" "}
              I like to describe myself as an{" "}
              <span className="highlight">explorer</span>, eager to learn{" "}
              <span className="highlight">something new</span>. I build{" "}
              <span className="highlight">interactive web</span> experiences
              using modern web technology and{" "}
              <span className="highlight ">enjoy sharing</span> what I know.
            </p>
          </div>
        )}
      </div>

      <div className="item mx-auto">
        <Button userTheme={userTheme} cta="See my adventures" />
      </div>
    </div>
  );
};

export default HomeBoi;
