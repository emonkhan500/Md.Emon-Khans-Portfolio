import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className='bg-[#212428]'>
            <div className=" grid max-w-screen-xl shadow-2xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#212428] text-gray-100">
	<div className="flex flex-col justify-between">
		
		<img src="https://i.ibb.co/mJjFZKS/young-executive-working-with-headset-laptop.jpg" alt="" className=" h-32 mt-6 md:h-40" />
			<div>
            <h2 className="text-4xl font-bold leading-tight lg:text-4xl">Md Emon Khan</h2>
            <p >Jr. Web Developer</p>
            </div>
            <p className='text-lg'>I am available for work. Connect with me through or call my no.</p>
            <div className='mt-2'>
                <p><span className='text-gray-400'>Phone:</span> 01884932158 </p>
                <p><span className='text-gray-400'>Email:</span> emonkhan562002@gmail.com</p>
            </div>
            <div className='mt-2 mb-6'>
    <h1 className='text-lg'>FIND ME HERE..</h1>
    <div className='flex gap-4 '>
        <a className='mt-3 text-3xl' href="https://www.linkedin.com/in/emon-khan-247498306/"><FaLinkedin /></a>
        <a className='mt-3 text-3xl' href="https://github.com/emonkhan500"><FaGithub /></a>
        <a className='mt-3 text-3xl' href="https://www.facebook.com/profile.php?id=100025282659899"><FaFacebook /></a>
    </div>
</div>
			
	</div>
	<form novalidate="" className="space-y-6 mt-7">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded " />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 text-gray-800 rounded "></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
	</form>
</div>
        </div>
        </div>
    );
};

export default Contact;