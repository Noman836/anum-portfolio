import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import Contactus from "./Contactus";
import HeroSection from "../components/HeroSection";
import Discription from "./Discription";
import Portfolio from "./Portfolio";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="w-full h-auto">
            <HeroSection />
          </section>
          <section className="w-full h-auto">
            <Discription />
          </section>
          <section className="w-full h-auto">
            <AboutMe />
          </section>
          <section className="w-full h-auto">
            <Skill />
          </section>
          <section>
            <Portfolio />
          </section>
          <section className="w-full h-auto">
            <Contactus />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
