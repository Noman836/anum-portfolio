// import React from "react";

// import { AiOutlineMail } from "react-icons/ai";

// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     <>
//       <div className=" w-full h-auto flex justify-center  bg-[#E5E5E5]">
//         <div className="  w-[500px] h-[500px] flex justify-center items-center ">
//           <div className=" w-[250px] h-[250px] ">
//             <spam className=" flex flex-col justify-center items-left  ">
//               <h2 className="text-[20px]  ">Hi I am</h2>
//               <br />
//               <h2 className="text-[25px] font-bold">ANUM AKRAM</h2>
//               <br />
//               <h2 className="text-[10px] mt-[-30px]">
//                 {" "}
//                 unity developer/web developer
//               </h2>
//             </spam>

//             <div className="  w-[150px] flex justify-around items-center mt-[50px]">
//               <div className="cursor-pointer">
//                 <a href="https://www.youtube.com/" target="_blank">
//                   <CiLinkedin size={20} />
//                 </a>
//               </div>
//               <div className="cursor-pointer">
//                 <a href="https://www.youtube.com/" target="_blank">
//                   <FaGithub size={20} />
//                 </a>
//               </div>
//               <div className="cursor-pointer">
//                 <a href="https://www.youtube.com/" target="_blank">
//                   <AiOutlineMail size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="  w-[500px] h-[500px] ">
//           <img
//             className="w-full h-full object-contain py-6 "
//             src="public/images/anum.png"
//             alt="anum"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;
import React, { useEffect, useState } from "react";
import "../App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ProfileCard() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); // 1 second ke baad image visible ho jaye
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full flex main mt-[-50px]">
      {/* Left Section */}
      <div className="relative w-1/2 flex flex-col justify-center sm:pl-16 z-10 bg-[#E5E5E5]">
        {/* Curved divider */}
        <div className="absolute top-0 right-[-2px] h-[100vh] w-24 z-100 bg-black [clip-path:polygon(100%_0,0_100%,100%_100%)]"></div>

        <p className="text-lg text-gray-600">Hi, I am</p>
        <h1 className="text-4xl font-bold mt-2">Anum Akram</h1>
        <p className="text-gray-500  text-[12px] sm:text-lg font-medium">
          Web Developer + Unity Developer
        </p>

        {/* Icons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="mailto:anumakram3500@gmail.com"
            className="p-2 bg-white rounded shadow"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://github.com/anumakram3500-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded shadow"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/anum-akram-4094731ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded shadow"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-1/2 w-4/3  bg-black flex items-center justify-center">
        <img
          className={`w-full h-full object-contain py-6 transition-opacity duration-1500 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src="images/anum.png"
          alt="anum"
        />
      </div>
    </div>
  );
}
