import React from "react";
import github from "../images/icons/Github.svg";
import twitter from "../images/icons/Twitter.svg";
import email from "../images/icons/Email.svg";
import githubDark from "../images/icons/dark/Github.svg";
import twitterDark from "../images/icons/dark/Twitter.svg";
import emailDark from "../images/icons/dark/Email.svg";

const Footer = ({ userTheme }) => {
  return (
    <div className=" max-w-full text-center ">
      <div className="flex w-[110px] justify-between mx-auto mb-2 ">
        <a href="https://github.com/SamChus" target="_blank" rel="noreferrer">
          {userTheme === "dark" ? (
            <img src={githubDark} alt="Samuel GitHub" />
          ) : (
            <img src={github} alt="Samuel GitHub" />
          )}
        </a>
        <a href="https://x.com/cz_sammy5" target="_blank" rel="noreferrer">
          {userTheme === "dark" ? (
            <img src={twitterDark} alt="Samuel Twitter" />
          ) : (
            <img src={twitter} alt="Samuel Twitter" />
          )}
        </a>
        <a
          href="mailto:samuelchigo55@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {userTheme === "dark" ? (
            <img src={emailDark} alt="send a mail to Samuel" />
          ) : (
            <img src={email} alt="send a mail to Samuel" />
          )}
        </a>
      </div>

      <p className="text-slate-500 dark:text-dim-body text-sm mx-auto">
        design inspired by{" "}
        <a href="https://kingslee-flame.vercel.app/" target="_blank" rel="noreferrer">
          <span className="text-dark dark:text-imagination">Kingslee-flame</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
