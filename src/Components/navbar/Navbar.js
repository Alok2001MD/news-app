import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets"


const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo thats in nav bar. */}
      <div>
        <img src={logo} alt="logo"  className='h-20 object-cover rounded-full relative after:absolute after:top-0 after:right-0 after:bottom-0 after:left-full after:w-16 after:bg-gradient-to-r from-transparent to-gray-300 '/>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            <li className="text-base font-normal text-designColor tracking-wide cursor-pointer hover:text-designColor duration-300">
              <Link to='/'>
                Home
              </Link>
            </li>
            <li className="text-base font-normal text-designColor  tracking-wide cursor-pointer hover:text-designColor duration-300">
              <Link to={'/contact'}>
                Contact
              </Link>
            </li>
            <li className="text-base font-normal text-designColor  tracking-wide cursor-pointer hover:text-designColor duration-300">
              <Link to={'/subscribe'}>
                Subscribe
              </Link>
            </li>
        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  
                </p>
              </div>
              <ul className="flex flex-col gap-4">
  
              </ul>
              <div className="flex flex-col gap-4">
                <Link to={"/"}>
                <li className="text-base uppercase font-titleFont mb-4 " style={{listStyle:"none"}}>Home</li>
                </Link>
                <Link to={"/contact"}>
                <li className="text-base uppercase font-titleFont mb-4" style={{listStyle:"none"}}>Contact Us</li>
                </Link>
                <Link to={"/subscribe"}>
                <li className="text-base uppercase font-titleFont mb-4"style={{listStyle:"none"}}>Subscribe</li>
                </Link>
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF  to='facebook.com'/>
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter  to='twitter.com'/>
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn to='https://www.linkedin.com/in/alok-mattihalli-047854221/' />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar