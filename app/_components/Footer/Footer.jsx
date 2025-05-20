import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='py-16 bg-sky-200'>
        <div className='container'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4'>
              {/* First section */}
              <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'>The coding journey</h1>
                <p className='text-dark'>
                   UGUNJA
                </p>
              </div>
              {/* Second section */}
              <div className='grid grid-cols-2 gap-10'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>SERVICES</h1>
                    <div className='text-dark'>
                        <ul className='space-y-2 text-lg'>
                            <li className='cursor-pointer hover:text-secondary duration-200'></li>
                            <li className='cursor-pointer hover:text-secondary duration-200'></li>
                            <li className='cursor-pointer hover:text-secondary duration-200'></li>
                            <li className='cursor-pointer hover:text-secondary duration-200'></li>
                        </ul>
                    </div>
                </div>
                <div>
                  <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>Links</h1>
                    <div className='text-dark'>
                        <ul className='space-y-2 text-lg'>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Home</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Services</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>About</li>
                            <li className='cursor-pointer hover:text-secondary duration-200'>Contact</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Third section  */}
              <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'>Get In Touch</h1>
                <div className='flex items-center'>
                    <input type='text' placeholder='vincentomondi0041@gmail.com' className='p-1/2 rounded-s bg-white w-full py-4
                    focus:ring-0 focus:outline-none placeholder:text-dark2'/>
                    <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl'>Go</button>
                </div>
                {/* Social icons */}
                <div className='flex space-x-6 py-3'>
                    <a href="https://chat.whatsapp.com/HyXDEtvH37jCiZts5BtUSB">
                        <FaWhatsapp className='cursor-pointer text-4xl hover:text-primary hover:scale-105 duration-200'/>
                    </a>
                    <a href="https://www.instagram.com/vincentowerah">
                        <FaInstagram className='cursor-pointer text-4xl hover:text-primary hover:scale-105 duration-200'/>
                    </a>
                    <a href="https://www.facebook.com/mister.vincent.2023">
                        <FaFacebook className='cursor-pointer text-4xl hover:text-primary hover:scale-105 duration-200'/>
                    </a>
                </div>
              </div>
           </div>
        </div>
    </footer>
  )
}

export default Footer;
