import React from "react";
import "../App.css";
import { FaCode, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import fruitgame from "../../public/images/fruitgame.png";
import carcrash from "../../public/images/carcrash.png";
import anime from "../../public/images/anime.png";
import car from "../../public/images/car.jpg";
import cargame from "../../public/images/cargame.png";
import horse from "../../public/images/horse.jpg";

import naseebiadmin from "../../public/images/naseebiadmin.jpg";

import naseebiApp from "../../public/images/naseebiApp.png";
import soundboard from "../../public/images/soundboard.jpg";
import portfolio from "../../public/images/portfolio.png";
fortiquo;
import fortiquo from "../../public/images/fortiquo.png";

import Slider from "react-slick";

// Prev Button
const PrevArrow = ({ style, onClick }) => (
  <div
    className="absolute left-[-5px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronLeft
      size={36}
      className="bg-white/80 text-black rounded-full shadow-lg p-2 
                 hover:bg-red-900 hover:text-white transition-transform 
                 duration-300 hover:scale-110 active:scale-95"
    />
  </div>
);

// Next Button
const NextArrow = ({ style, onClick }) => (
  <div
    className="absolute right-[-5px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronRight
      size={36}
      className="bg-white/80 text-black rounded-full shadow-lg p-2 
                 hover:bg-red-900 hover:text-white transition-transform 
                 duration-300 hover:scale-110 active:scale-95"
    />
  </div>
);

const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      name: "Fruit Game",
      image: fruitgame,
      codeLink:
        "https://www.amazon.com/Fruit-Shop-Supermarket-Grocery-Games/dp/B0DJPWD3ZS",
      playLink:
        "https://www.amazon.com/Fruit-Shop-Supermarket-Grocery-Games/dp/B0DJPWD3ZS",
    },
    {
      id: 2,
      name: "Car Crash Game",
      image: carcrash,
      codeLink:
        "https://www.amazon.com/Destruction-Crash-Throw-Highway-sling/dp/B0CVH79VTT",
      playLink:
        "https://www.amazon.com/Destruction-Crash-Throw-Highway-sling/dp/B0CVH79VTT",
    },
    {
      id: 3,
      name: "Anime Game",
      image: anime,
      codeLink:
        "https://www.amazon.com/School-Anime-Highschool-Games-Offline/dp/B0DNR7PM7C",
      playLink:
        "https://www.amazon.com/School-Anime-Highschool-Games-Offline/dp/B0DNR7PM7C",
    },
    {
      id: 4,
      name: "Car Game",
      image: car,
      codeLink:
        "https://www.amazon.com/City-Taxi-Driver-Simulator-Offline/dp/B0DJPTV8SG",
      playLink:
        "https://www.amazon.com/City-Taxi-Driver-Simulator-Offline/dp/B0DJPTV8SG",
    },

    {
      id: 5,
      name: "Car Driver Simulator",
      image: cargame,
      codeLink:
        "https://www.amazon.com/Car-Driver-Simulator-Offline-2024/dp/B0DJMX59WM/ref=sr_1_7?dib=eyJ2IjoiMSJ9.5YUrcBdNZ48GmQ1u-CVEJXmF4_pkVxQ5owIaPmfl-2idF8frbfLCVu5s2vkSvoj6p987-5mXD59zD8pXVDmJ4jijI9xGl-VLxYnq2dzl9Q6Q6m0MV56YKLiTBbk8FkJp4leFbkQ0v42Ccar6jigBVBUxX81b1A5dMaYAts--IDCvRFyyqiKKnyuzwW387ohe7bvCgJBEKIvqXwhMDhNs-Js2b_bYr2ayJ66JIVrzytF0SNWFM2gZEOAXtJsc3Kt5RUsf3z0D1SxMNXMKTZU1FSummMQbjhRqT6u1yFXkXxM.a02Ivpt_0WDJhN1cXX5PkvbATJaInqOYg3Kx_HhWd8o&dib_tag=se&qid=1764151484&refinements=p_4%3AMetamelon&s=mobile-apps&search-type=ss&sr=1-7",
      playLink:
        "https://www.amazon.com/Car-Driver-Simulator-Offline-2024/dp/B0DJMX59WM/ref=sr_1_7?dib=eyJ2IjoiMSJ9.5YUrcBdNZ48GmQ1u-CVEJXmF4_pkVxQ5owIaPmfl-2idF8frbfLCVu5s2vkSvoj6p987-5mXD59zD8pXVDmJ4jijI9xGl-VLxYnq2dzl9Q6Q6m0MV56YKLiTBbk8FkJp4leFbkQ0v42Ccar6jigBVBUxX81b1A5dMaYAts--IDCvRFyyqiKKnyuzwW387ohe7bvCgJBEKIvqXwhMDhNs-Js2b_bYr2ayJ66JIVrzytF0SNWFM2gZEOAXtJsc3Kt5RUsf3z0D1SxMNXMKTZU1FSummMQbjhRqT6u1yFXkXxM.a02Ivpt_0WDJhN1cXX5PkvbATJaInqOYg3Kx_HhWd8o&dib_tag=se&qid=1764151484&refinements=p_4%3AMetamelon&s=mobile-apps&search-type=ss&sr=1-7",
    },

    {
      id: 6,
      name: "Wild Westland Survival Cowboy Horse",
      image: horse,
      codeLink:
        "https://www.amazon.com/Westland-Survival-Cowboy-Horse-Games/dp/B0DLV7FMB6/ref=sr_1_22?dib=eyJ2IjoiMSJ9.5YUrcBdNZ48GmQ1u-CVEJXmF4_pkVxQ5owIaPmfl-2idF8frbfLCVu5s2vkSvoj6p987-5mXD59zD8pXVDmJ4jijI9xGl-VLxYnq2dzl9Q6Q6m0MV56YKLiTBbk8FkJp4leFbkQ0v42Ccar6jigBVBUxX81b1A5dMaYAts--IDCvRFyyqiKKnyuzwW387ohe7bvCgJBEKIvqXwhMDhNs-Js2b_bYr2ayJ66JIVrzytF0SNWFM2gZEOAXtJsc3Kt5RUsf3z0D1SxMNXMKTZU1FSummMQbjhRqT6u1yFXkXxM.a02Ivpt_0WDJhN1cXX5PkvbATJaInqOYg3Kx_HhWd8o&dib_tag=se&qid=1764152853&refinements=p_4%3AMetamelon&s=mobile-apps&search-type=ss&sr=1-22",
      playLink:
        "https://www.amazon.com/Westland-Survival-Cowboy-Horse-Games/dp/B0DLV7FMB6/ref=sr_1_22?dib=eyJ2IjoiMSJ9.5YUrcBdNZ48GmQ1u-CVEJXmF4_pkVxQ5owIaPmfl-2idF8frbfLCVu5s2vkSvoj6p987-5mXD59zD8pXVDmJ4jijI9xGl-VLxYnq2dzl9Q6Q6m0MV56YKLiTBbk8FkJp4leFbkQ0v42Ccar6jigBVBUxX81b1A5dMaYAts--IDCvRFyyqiKKnyuzwW387ohe7bvCgJBEKIvqXwhMDhNs-Js2b_bYr2ayJ66JIVrzytF0SNWFM2gZEOAXtJsc3Kt5RUsf3z0D1SxMNXMKTZU1FSummMQbjhRqT6u1yFXkXxM.a02Ivpt_0WDJhN1cXX5PkvbATJaInqOYg3Kx_HhWd8o&dib_tag=se&qid=1764152853&refinements=p_4%3AMetamelon&s=mobile-apps&search-type=ss&sr=1-22",
    },
  ];
  const portfolioDataWeb = [
    {
      id: 1,
      name: "naseebiadmin",
      image: naseebiadmin,
      codeLink: "https://naseebi.com/",
      playLink: "https://naseebi.com/",
    },
    {
      id: 2,
      name: "naseebiApp",
      image: naseebiApp,
      codeLink: "https://naseebi.com/",
      playLink: "https://naseebi.com/",
    },
    {
      id: 3,
      name: "Soundboard",
      image: soundboard,
      codeLink: "https://www.myinstants.com/en/index/pk/",
      playLink: "https://www.myinstants.com/en/index/pk/",
    },
    {
      id: 5,
      name: "My Portfolio",
      image: portfolio,
      codeLink: "https://portfolio-oxau.vercel.app/",
      playLink: "https://portfolio-oxau.vercel.app/",
    },
    {
      id: 6,
      name: "Fotiquo",
      image: fortiquo,
      codeLink: "",
      playLink: "",
    },
  ];

  // Slider Settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } }, // lg
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // md
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // sm tablets
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // mobile
    ],
  };

  return (
    <>
      <div className="relative w-full min-h-[800px]">
        {/* Overlay Background */}
        <div className="absolute w-full h-full bg-black opacity-70">
          <div className="w-full h-[106px] flex justify-center items-center">
            <div className="text-white w-full text-2xl font-bold sm:w-[250px] h-[65px] border-5 flex justify-center items-center tracking-[10px]">
              PORTFOLIO
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="absolute w-full top-20 flex flex-col items-center overflow-x-hidden gap-12 pb-10 px-4">
          <div className="w-[1000px]">
            {/* First Slider */}
            <Slider
              {...sliderSettings}
              className="w-full sm:px-0 px-6 h-[280px] py-3"
            >
              {portfolioData.map((data) => (
                <div key={data.id} className="px-3">
                  <div className="bg-white/80 w-full shadow-md rounded-xl overflow-hidden">
                    <div className="w-full h-40 sm:h-48 overflow-hidden">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col items-center">
                      <h3 className="font-bold text-lg mb-3 text-center">
                        {data.name}
                      </h3>
                      <div className="flex items-center gap-6">
                        <a
                          href={data.codeLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaCode
                            size={32}
                            className="bg-gray-300 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
                          />
                        </a>
                        <a
                          href={data.playLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaPlay
                            size={32}
                            className="bg-gray-300 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Second Slider */}
            <div className="w-full mt-10">
              <Slider {...sliderSettings} className="w-full h-[280px] py-3">
                {portfolioDataWeb.map((data) => (
                  <div key={data.id} className="px-3">
                    <div className="bg-white/80 shadow-md rounded-xl overflow-hidden">
                      <div className="w-full h-40 sm:h-48 overflow-hidden">
                        <img
                          src={data.image}
                          alt={data.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col items-center">
                        <h3 className="font-bold text-lg mb-3 text-center">
                          {data.name}
                        </h3>
                        <div className="flex items-center gap-6">
                          <a
                            href={data.codeLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaCode
                              size={32}
                              className="bg-gray-300 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
                            />
                          </a>
                          <a
                            href={data.playLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaPlay
                              size={32}
                              className="bg-gray-300 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
