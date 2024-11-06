import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#212428] pt-10 pb-10">
      <h1 className="text-white text-center font-bold text-5xl pt-10">
        My Skills
      </h1>
      <hr className=" border border-red-600 mt-3 lg:mx-72" />
      <div className="text-white flex justify-center items-center gap-10 mt-14 lg:px-40">
        <div className=" shadow-2xl px-4 py-3 text-center">
          <h1 className="mt-7 text-2xl font-bold mb-7">Front-End Side</h1>

          <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/xGTKt1c/1-Ce-N6l8z-I.png"
                alt=""
              />
              <h1>HTML-5</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/n86pkzL/2-C5-Ko-YWQG.png"
                alt=""
              />
              <h1>CSS-3</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/P6G7FGB/3-Dd-Kl-V5gf.png"
                alt=""
              />
              <h1>JavaScript</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/b5wtbW7/4-D1-Q3z-TSR.png"
                alt=""
              />
              <h1>React Js</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/ZcfHsw3/5-Dc-HMH4-I0.png"
                alt=""
              />
              <h1>Tailwind CSS</h1>
            </div>
          </div>
        </div>

        <div className=" shadow-2xl px-4 py-3 text-center">
          <h1 className=" mt-7 text-2xl font-bold mb-7">Backend Side</h1>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
            <div className="flex  flex-col justify-center items-center hover:scale-110 duration-200">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/TqJB2tp/download.png"
                alt=""
              />
              <h1>Node JS</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/KX45cXr/8-D-Gw4-Gq4.png"
                alt=""
              />
              <h1>Express JS</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/K96YVBT/9-Dk-Onj-DZn.png"
                alt=""
              />
              <h1>MongoDB</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/hRVN6KT/download-1-1.png"
                alt=""
              />
              <h1>Firebase</h1>
            </div>
            <div className="flex hover:scale-110 duration-200 flex-col justify-center items-center">
              <img
                className="h-20 w-16"
                src="https://i.ibb.co/r40tkLN/download-2.png"
                alt=""
              />
              <h1>JWT Token</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
