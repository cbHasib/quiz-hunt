import React from "react";
import Lottie from "lottie-react";
import quizAnim from "../../assets/quiz.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-base-content sm:text-5xl leading-none text-center lg:text-left">
              Gain Extra{" "}
              <span className="inline-block text-accent-focus">Knowledge</span>{" "}
              <br className="hidden md:block" /> with{" "}
              <span className="italic">
                Quiz<span className="inline-block text-primary">Hunt</span>
              </span>
            </h2>
            <p>
              By taking quiz from{" "}
              <span className="italic font-medium">
                Quiz<span className="inline-block text-primary">Hunt</span>
              </span>{" "}
              you can enrich your knowledge with lots of new things. Try to
              solve quiz and become a super hero to you.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-3">
            <Link
              href="/home"
              className="btn btn-primary w-full md:w-[50%] lg:w-auto"
            >
              <span>Visit Store</span>
            </Link>
            <Link
              href="/about"
              aria-label=""
              className="btn btn-primary btn-outline w-full md:w-[50%] lg:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-full">
            <Lottie animationData={quizAnim} loop={true} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
