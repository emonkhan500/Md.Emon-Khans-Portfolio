import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row pb-9 gap-24  lg:px-40  justify-center items-center  pt-40 lg:pt-36 bg-[#212428]'>
            <div className='text-white px-12 lg:w-1/2'> 
                <h1>WELCOME TO MY PLACE</h1>
                <h1 className='text-4xl font-bold mt-4'>Hi, I’m <span className='text-red-700 text-6xl'>Md EMON KHAN</span> <Typewriter 
           words={['a Dedicated Front-End Developer']}
           loop={5}
           cursor
           cursorStyle='_'
           typeSpeed={90}
           deleteSpeed={50}
           delaySpeed={1300}
           ></Typewriter>
|</h1>
<p className='mt-4 text-lg text-gray-400'>Feel comfortable learning and exploring coding and technology. <br /> And because of the passion and love for coding and technology, choosing this sector as a career.</p>
<div className='mt-7  mb-6'>
    <h1 className='text-lg text-blue-600'>FIND ME HERE....</h1>
    <div className='flex gap-4 '>
        <a className='mt-3 text-3xl' href="https://www.linkedin.com/in/emon-khan-247498306/"><FaLinkedin /></a>
        <a className='mt-3 text-3xl' href="https://github.com/emonkhan500"><FaGithub /></a>
        <a className='mt-3 text-3xl' href="https://www.facebook.com/profile.php?id=100025282659899"><FaFacebook /></a>
    </div>
</div>
            </div>
            <div className='lg:w-1/2'>
                <img className='shadow-2xl w-full h-[400px]  lg:h-[600px] lg:w-[650px] ' src="https://i.ibb.co/jhgR9fT/image-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;