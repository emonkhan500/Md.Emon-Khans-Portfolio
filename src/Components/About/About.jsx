import React from 'react';

const About = () => {
    return (
        <div className='bg-[#212428] pt-8 pb-10 lg:px-40'>
            <hr  className='mx-20 lg:mx-36'/>
           <div className='flex flex-col lg:flex-row  gap-6 justify-center items-center mt-14'>
           <div className='text-white  lg:px-20 mt-8 w-1/2'>
                <h1 className='font-semibold mb-2'>About Me</h1>
                <hr  className='mr-20 border border-red-600'/>
                <h1 className='mt-5 text-4xl text-white'>Who am i?</h1>
                <p className='mt-4 text-gray-400 text-lg'>I am a junior front-end developer. Strong passion, love and self-improvement for technology and coding so far Fontend has learned - ReactJS, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS also mobile responsive, all device responsive and various packages, frameworks, libraries. Also learned and learning for backend - MongoDB, NodeJS, Express.js, JWT, and Firebase.

Besides practice and work, I am constantly learning new things and love learning new technologies. I like taking on new challenges. My next target is to become a very good full-stack developer.

</p>
            </div>
            <div className='w-1/2 px-20'>
                <img className='rounded-full mt-6 lg:mt-8 h-64 border-4 border-red-700 w-h-64' src="/src/assets/Untitled design (2).png" alt="" />
            </div>
           </div>
        </div>
    );
};

export default About;