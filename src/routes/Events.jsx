import React from "react";
import profile from "../images/sam.jpeg";
import github from "../images/icons/Github.svg";
import twitter from "../images/icons/Twitter.svg";
import email from "../images/icons/Email.svg";
import githubDark from "../images/icons/dark/Github.svg";
import twitterDark from "../images/icons/dark/Twitter.svg";
import emailDark from "../images/icons/dark/Email.svg";
import Nav from "../components/Nav";
import Resume from "../components/resume/Resume";

const Events = ({
  projects,
  talks,
  userTheme,
  onNavEnter,
  onNavLeave,
  onActivityEnter,
  onActivityLeave,
  onTalkEnter,
  onTalkLeave,
}) => {
  // const articles = projects.filter(
  //   (project) => project.fields.Type === "Article"
  // );

  return (
    <>
      <div className="container max-w-xl md:max-w-[1280px] mx-auto h-full text-dark-secondary flex justify-between md:justify-between p-4 scroll-smooth">
        <div className="hidden lg:block min-w-[420px] mr-4">
          <div className=" hidden lg:flex lg:flex-col lg:justify-around w-[420px] fixed top-0 px-2 h-screen  ">
            {/* top block, left flang */}
            <div className="">
              <p className="text-[42px] text-dark dark:text-imagination font-semibold w-80 leading-tight">
                Hello, I am Samuel Chukwuma
              </p>
              {userTheme === "dark" ? (
                <div className="description">
                  <p className="item mt-2 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
                    A <span className="highlight two">software engineer</span>{" "}
                    with equal love for{" "}
                    <span className="highlight">
                      design and solving problems using frontend technology.
                    </span>{" "}
                    I like to describe myself as an{" "}
                    <span className="highlight">explorer</span>, eager to learn{" "}
                    <span className="highlight">something new</span>. I build{" "}
                    <span className="highlight">interactive web</span>{" "}
                    experiences using modern web technology and{" "}
                    <span className="highlight ">enjoy sharing</span> what I
                    know.
                  </p>
                </div>
              ) : (
                <div className="description-dark">
                  <p className="item mt-2 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
                    A <span className="highlight two">software engineer</span>{" "}
                    with equal love for{" "}
                    <span className="highlight">
                      design and solving problems using frontend technology.
                    </span>{" "}
                    I like to describe myself as an{" "}
                    <span className="highlight">explorer</span>, eager to learn{" "}
                    <span className="highlight">something new</span>. I build{" "}
                    <span className="highlight">interactive web</span>{" "}
                    experiences using modern web technology and{" "}
                    <span className="highlight ">enjoy sharing</span> what I
                    know.
                  </p>
                </div>
              )}
            </div>
            {/* top block, middle flang */}
            <Nav onEnter={onNavEnter} onLeave={onNavLeave} active="events" />

            {/* top block, bottom flang */}
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full" src={profile} alt="" />
              <a
                href="https://github.com/SamChus"
                target="_blank"
                rel="noreferrer"
                className="flex ml-4 "
              >
                {userTheme === "dark" ? (
                  <img
                    className="h-6 w-6"
                    src={githubDark}
                    alt="Kingslee GitHub"
                  />
                ) : (
                  <img className="h-6 w-6" src={github} alt="Kingslee GitHub" />
                )}{" "}
                <span className="ml-1 text-dark-secondary dark:text-imagination">
                  GitHub
                </span>
              </a>

              <a
                href="https://x.com/cz_sammy5"
                target="_blank"
                rel="noreferrer"
                className="flex ml-4 "
              >
                {userTheme === "dark" ? (
                  <img
                    className="h-6 w-6"
                    src={twitterDark}
                    alt="Kingslee twitter"
                  />
                ) : (
                  <img
                    className="h-6 w-6"
                    src={twitter}
                    alt="Kingslee twitter"
                  />
                )}{" "}
                <span className="ml-1 text-dark-secondary dark:text-imagination">
                  Twitter
                </span>
              </a>

              <a
                href="mailto:samuelchigo55@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex ml-4 "
              >
                {userTheme === "dark" ? (
                  <img
                    className="h-6 w-6"
                    src={emailDark}
                    alt="Kingslee email"
                  />
                ) : (
                  <img className="h-6 w-6" src={email} alt="Kingslee email" />
                )}{" "}
                <span className="ml-1 text-dark-secondary  dark:text-imagination">
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* right flang */}
        <div className=" w-full lg:w-[50%] lg:mt-14 project-half">
          <div className="h-[80px] lg:hidden"></div>
          <Resume />
          {/* <PeopleContainer people={people} userTheme={userTheme} /> */}
          <p className="text-slate-500 dark:text-dim-body text-sm mx-auto hidden md:block">
            design inspired by{" "}
            <a
              href="https://kingslee-flame.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-dark dark:text-imagination">
                Kingslee-flame
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Events;
