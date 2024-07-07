import React from 'react';

const Projects = () => {
    return (
        <div className='bg-[#212428] pt-10 lg:px-40 pb-10'>
            <h1 className='text-white text-center font-bold text-5xl pt-10'>My Recent Project</h1>
            <hr className=" border border-red-600 mt-3 lg:mx-72" />
            <div className='pt-16 flex flex-col lg:flex-row gap-4'>
            <div className="card bg-base-300 mx-auto w-[550px] lg:auto shadow-xl ">
  <figure>
    <img
    className='h-[550px] w-full'
      src="https://i.ibb.co/R47mhJ0/b9-assignment-12-real-estate-web-app.png"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">Property Zone </h2>
    <hr className='mb2 border-1 border-black'/>
    <div className='text-sm flex justify-center flex-wrap gap-2 text-slate-300'> 
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>React JS</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Tailwind CSS</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>JWT Token</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Tanstack Query</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>MongoDB</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Express JS</span>
    </div>
    <hr className=' mt-2 border-1 border-black'/>
    <div className="mt-3 ">
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://b9-assignment-12-real-estate.web.app/">LIVE VIEW</a>
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client">CLIENT SIDE</a>
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://github.com/emonkhan500/B9-AS12-Property-Priject-Server">SERVER SIDE</a>
    </div>
  </div>
</div>
            <div className="card bg-base-300 mx-auto w-[550px] shadow-xl ">
  <figure>
    <img
    className='h-[550px] w-full'
      src="https://i.ibb.co/XxyzJYR/b9-assignment-11-web-app.png"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">BLOG HUB </h2>
    <hr className='mb2 border-1 border-black'/>
    <div className='text-sm flex justify-center flex-wrap gap-2 text-slate-300'> 
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>React JS</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Tailwind CSS</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Daisy UI</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Tanstack Query</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>MongoDB</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Express JS</span>
    </div>
    <hr className=' mt-2 border-1 border-black'/>
    <div className="mt-3 ">
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://b9-assignment-11.web.app/">LIVE VIEW</a>
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://github.com/emonkhan500/B9-AS11-Blog-Hub-Client">CLIENT SIDE</a>
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://github.com/emonkhan500/B9-AS11-Blog-Hub-Server">SERVER SIDE</a>
    </div>
  </div>
</div>
            <div className="card bg-base-300 mx-auto w-[550px] shadow-xl ">
  <figure>
    <img
    className='h-[550px] w-full'
      src="https://i.ibb.co/4RM8q3k/b9-assignment10-f3bf8-web-app.png"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">Tour Asia </h2>
    <hr className='mb2 border-1 border-black'/>
    <div className='text-sm flex justify-center flex-wrap gap-2 text-slate-300'> 
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>React JS</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Tailwind CSS</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Daisy UI</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Tanstack Query</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>MongoDB</span>
        <span className='border px-2 rounded-full text-gray-800 border-slate-600'>Express JS</span>
    </div>
    <hr className=' mt-2 border-1 border-black'/>
    <div className="mt-3 ">
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://b9-assignment10-f3bf8.web.app/">LIVE VIEW</a>
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://github.com/emonkhan500/B9-AS10-Tour-Asia-Client">CLIENT SIDE</a>
      <a className='bg-black border px-2 py-2 rounded-2xl  text-gray-100' href="https://github.com/emonkhan500/B9-AS10-Tour-Asia-Server">SERVER SIDE</a>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Projects;

