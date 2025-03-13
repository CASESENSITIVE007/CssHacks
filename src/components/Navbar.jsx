import {Link as  ScrollLink } from "react-scroll";
import logo from "./images/a.png";
import amulogo from "./images/Amu-logo.png";

function Navbar() {
  return (

      <div className=" mx-auto flex opacity-90  bg-black/70 items-center justify-between md:justify-around h-28 ">
        <div className="text-white text-2xl font-bold flex items-center">
          <img src={amulogo} alt="Logo" className="h-20 mr-2 hover:h-28 absolute hover:w-32 " />
        </div>
        <nav className=" ml-16" >
          <ul className="flex  space-x-4">
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className=" cursor-pointer text-white text-2xl font-serif  hover:underline  ">
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="themes" smooth={true} duration={500}  className=" cursor-pointer text-white text-2xl font-serif hover:underline   ">
                THEMES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="timeline" smooth={true} duration={500}  className=" cursor-pointer text-white text-2xl font-serif hover:underline   ">
                TIMELINE
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="prize" smooth={true} duration={500} className="cursor-pointer text-white text-2xl font-serif hover:underline  ">
              PRIZES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="team" smooth={true} duration={500} className="cursor-pointer text-white text-2xl font-serif hover:underline  ">
                TEAM
              </ScrollLink>
            </li>
           
     
         
          
          
           
         
          </ul>
        </nav>
        <div className="text-white text-2xl font-bold flex mr-16 items-center  ">
          <img src={logo} alt="Logo" className="h-28  hover:h-32   absolute hover:w-32 " />
        </div>
      </div>
  
  );
}

export default Navbar;
