import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#212428] pt-10 pb-10">
      <h1 className="text-white text-center font-bold text-5xl pt-10">My Skills</h1>
      <hr className=" border border-red-600 mt-3 lg:mx-72" />
      <div className="text-white flex justify-center items-center gap-10 mt-14 px-40">
        <div className="w-1/2 shadow-2xl px-4 py-3 text-center">
          <h1 className="mt-7 text-2xl font-bold mb-7">Front-End Side</h1>

          <div className="grid gap-3 grid-cols-3">

            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
            <img className="h-20 w-16" src="/src/assets/1-CeN6l8zI.svg" alt="" />
            <h1 >HTML-5</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
            <img className="h-20 w-16" src="/src/assets/2-C5KoYWQG.svg" alt="" />
            <h1 >CSS-3</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
            <img className="h-20 w-16" src="/src/assets/3-DdKlV5gf.svg" alt="" />
            <h1 >JavaScript</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
            <img className="h-20 w-16" src="/src/assets/4-D1Q3zTSR.svg" alt="" />
            <h1 >React Js</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
            <img className="h-20 w-16" src="/src/assets/5-DcHMH4I0.svg" alt="" />
            <h1 >Tailwind CSS</h1>
            </div>

           
            
            
            
          </div>
        </div>

        <div className="w-1/2 shadow-2xl px-4 py-3 text-center">
          <h1 className=" mt-7 text-2xl font-bold mb-7">Backend Side</h1>
          <div className="grid gap-3 grid-cols-3">

          <div className="flex  flex-col justify-center items-center hover:scale-110 duration-200">
          <img className="h-20 w-16" src="/src/assets/react.svg" alt="" />
            <h1 >Node JS</h1>
            </div>
          <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
          <img className="h-20 w-16" src="/src/assets/8-D_Gw4Gq4.svg" alt="" />
            <h1 >Express JS</h1>
            </div>
          <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
          <img className="h-20 w-16" src="/src/assets/9-DkOnjDZn.svg" alt="" />
            <h1 >MongoDB</h1>
            </div>
          <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
          <img className="h-20 w-16" src="/src/assets/download (1).svg" alt="" />
            <h1 >Firebase</h1>
            </div>
          <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
          <img className="h-20 w-16" src="/src/assets/download (2).svg" alt="" />
            <h1 >JWT Token</h1>
            </div>

            
            
            
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
