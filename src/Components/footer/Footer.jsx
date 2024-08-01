import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {
    return (
        <div>
            <hr className=" border border-red-600  lg:mx-" />
            <footer className="bg-[#212428]">
	<div className="container flex flex-col items-center p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600 text-slate-200">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <ScrollLink to="about" smooth={true} duration={500}>
            <li className='text-gray-500 text-xl font-semibold'>ABOUT</li>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
            <li className='text-gray-500 text-xl font-semibold'>PROJECT</li>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
            <li className='text-gray-500 text-xl font-semibold'>SKILL</li>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
            <li className='text-gray-500 text-xl font-semibold'>CONTACT</li>
            </ScrollLink>
			
			
		
		
		
		</ul>
		<div>
            <h1 className='font-bold'>© 2024 - All right reserved by
<span className='text-red-600'>Md Emon Khan</span></h1>
        </div>
	</div>
</footer>
        </div>
    );
};

export default Footer;
