import React from "react";
import Loader from "../components/Loader";
import { useState } from "react";
import { useEffect } from "react";
// import ButtonCustom from "../components/ButtonCustom.jsx";

const AboutMe = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const exploreHandler = (e) => {
    e.preventDefault(), console.log("About me");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-auto bg-[#E5E5E5] pt-10">
          {/* ABOUT ME HEADER */}
          <div className="w-full h-[106px] flex justify-center items-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold px-6 py-3 border-2 flex justify-center items-center tracking-[5px] sm:tracking-[10px]">
              ABOUT ME
            </div>
          </div>

          {/* ABOUT ME PARAGRAPH */}
          <p className="text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            I am a web developer and also gamming developer. I from Pakistan and
            city Sahiwal. My qualification is MS Computer Science. I like to
            write and eat different fruits. <br />I dislike negativity and
            unethical persons.
          </p>

          {/* BUTTON */}
          {/* <div className="flex justify-center mt-6">
            <ButtonCustom title="EXPLORE" onClicks={exploreHandler} />
          </div> */}

          {/* SEPARATOR IMAGE */}
          <div className="w-full h-[150px] flex justify-center items-center">
            <img
              className="w-[200px] sm:w-[300px] h-auto"
              src="public/images/sep.png"
              alt="seprator"
            />
          </div>

          {/* SERVICES SECTION */}
          <div className="w-full flex flex-col items-center justify-center gap-8 px-4">
            {/* DESIGNER + DEVELOPMENT */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-32 lg:gap-48 text-center md:text-left">
              <div className="max-w-xs">
                <h1 className="font-bold mb-3 text-lg">GAMING</h1>
                <p className="text-sm sm:text-base">
                  Unity Game Development · Mobile Games 3D/2D Gameplay <br />
                  Gameplay mechanics & controllers Animations, UI systems &
                  Level design Cinemachine, Timelines & optimization
                  Mobile-ready games with smooth performance
                </p>
              </div>
              <div className="max-w-xs mt-6 md:mt-0">
                <h1 className="font-bold mb-3 text-lg">
                  DEVELOPMENT (Frontend)
                </h1>
                <p className="text-sm sm:text-base">
                  React.js · Next.js · Tailwind CSS · UI Implementation <br />
                  Responsive, pixel-perfect UI development Component-based
                  architecture (React/Next) API integration & dynamic data
                  rendering Modern, fast & mobile-friendly web design
                </p>
              </div>
            </div>

            {/* MAINTENANCE */}
            <div className="h-auto md:h-[200px] w-full md:w-1/2 flex items-center justify-center text-center md:text-left">
              <div className="max-w-xs">
                <h1 className="font-bold mb-3 text-lg">MAINTAINENCE</h1>
                <p className="text-sm sm:text-base">
                  Updates, Bug Fixing, Performance Optimization Improve speed &
                  fix UI/UX issues Regular updates & security checks Code
                  refactoring & feature enhancements Ongoing technical support
                </p>
              </div>
            </div>
          </div>

          {/* SEPARATOR IMAGE */}
          <div className="w-full flex justify-center items-center mt-6">
            <img
              className="w-[200px] sm:w-[300px] h-auto"
              src="images/sep.png"
              alt="seprator"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
