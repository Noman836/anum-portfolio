import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Skill = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" w-full h-auto bg-[#E5E5E5] pt-10">
          <div className="w-full h-[106px] flex justify-center items-center">
            <div className="text-2xl font-bold w-[250px] h-[65px] border-5 flex justify-center items-center tracking-[10px]">
              SKILLS
            </div>
          </div>
          <div
            className="w-full sm:w-[35%] m-auto mt-5
         flex justify-between"
          >
            <h2 className="text-center p-6 text-[12px] tracking-[2px] font-bold  ">
              USING NOW:
            </h2>
          </div>
          ;
          <div className=" pb-4 sm:w-[35%] w-full mx-auto sm:flex flex flex-wrap sm:justify-left justify-center gap-10 ">
            <div className="w-[100px] h-[100px]">
              <img src="images/unity.png" alt="unity" />
              <h2 className="text-center font-bold text-[12px]">Unity</h2>
            </div>
            <div className="w-[100px] h-[140px]">
              <img
                // style={{ width: "1000px", height: "70px" }}
                src="images/cSharp.png"
                alt="c#"
              />
              <h2 className="text-center font-bold text-[12px]">C#</h2>
            </div>
            <div className="w-[100px] h-[140px]">
              <img src="images/opp.png" alt="oop" />
              <h2 className="text-center font-bold text-[12px]">OOP</h2>
            </div>
            <div className="w-[100px] h-[140px]">
              <img src="images/ds.png" alt="ds" />
              <h2 className="text-center font-bold text-[12px]">
                Data Structure
              </h2>
            </div>
            <div className=" w-[100px] h-[140px]">
              <img src="images/html5.png" alt="html5" />
              <h2 className="text-center font-bold text-[12px]">HTML5</h2>
            </div>
            <div className="w-[100px] h-[140px]">
              <img src="images/css.png" alt="css" />
              <h2 className="text-center font-bold text-[12px]">CSS</h2>
            </div>
            <div className="sm:w-[70px] h-[100px]">
              <img src="images/react.png" style={{ width: 100 }} alt="react" />
              <h2 className="text-center font-bold text-[12px]">React.js</h2>
            </div>

            <div className="sm:w-[70px] h-[100px]">
              <img
                src="images/js.png"
                style={{ width: 100 }}
                alt="next.js"
                className="pt-2.5"
              />
              <h2 className="text-center font-bold text-[12px]  ">JS</h2>
            </div>
            <div className="sm:w-[70px] h-[100px]">
              <img
                src="images/tailwind.png"
                style={{ width: 100 }}
                alt="tailwind"
              />
              <h2 className="text-center font-bold text-[12px]">Tailwind</h2>
            </div>
          </div>
          {/* <div className="w-[35%] m-auto flex justify-between">
            <h2 className="text-center p-6 text-[14px] tracking-[2px] font-bold   ">
              Learning:
            </h2>
          </div> */}
          <div className="sm:w-[35%] w-full h-[350px] m-auto flex gap-3 justify-center flex-wrap ">
            <div className="sm:w-[70px] h-[100px]">
              <img
                src="images/python.png"
                style={{ width: 100 }}
                alt="python"
              />
              <h2 className="text-center font-bold text-[12px]">Python</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skill;
