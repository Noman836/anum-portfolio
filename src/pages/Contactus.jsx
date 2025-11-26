import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ButtonCustom from "../components/ButtonCustom.jsx";

const Contactus = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const submitHandler = () => {
    console.log("ye maira submit button click hua hai ");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-auto bg-[#E5E5E5] pt-10">
          <div className="w-full h-[106px] flex justify-center items-center ">
            <div className="text-2xl font-bold w-[250px] h-[65px] border-5 flex justify-center items-center tracking-[10px]">
              CONTACT
            </div>
          </div>
          <p className=" text-center text-[12px] sm:px-0 px-10">
            My name is ANUM AKRAM. I am software engineer <br />
            my contact no is this 03008890346.
          </p>
          <div className=" w-full h-[50px] flex justify-center items-center">
            <img
              className="w-[300px] h-[70px] "
              src="public/images/sep.png"
              alt="seprator"
            />
          </div>

          <div className="h-[500px]  flex justify-center items-center">
            <form
              action=""
              className="sm:w-[500px] w-[400px] h-[450px] flex flex-col gap-3 items-center justify-start pt-15"
            >
              <div className="flex flex-col gap-1">
                <input
                  className="border-3 border-black sm:w-[500px]  h-[40px] placeholder:font-bold placeholder:text-[12px] pl-2 border-t-0 border-r-0"
                  placeholder="Enter your Name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  className="border-3 border-black sm:w-[500px] h-[40px] placeholder:font-bold placeholder:text-[12px] pl-2 border-t-0 border-r-0"
                  placeholder="Enter your Email"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="number"
                  className="border-3 border-black sm:w-[500px] h-[40px] placeholder:font-bold placeholder:text-[12px] pl-2 border-t-0 border-r-0"
                  placeholder="Enter your Number"
                />
              </div>
              <div className="flex sm:w-full w-[200px] flex-col gap-1">
                <textarea
                  className="border-3 border-black  placeholder:font-bold placeholder:text-[12px] pl-2 border-t-0 border-r-0"
                  placeholder="Enter your Message"
                  name=""
                  id=""
                  rows={5}
                  cols={60}
                ></textarea>
              </div>
              <div>
                <ButtonCustom title="SUBMIT" onClicks={submitHandler} />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contactus;
