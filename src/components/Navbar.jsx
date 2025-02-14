import logo from "./images/a.png";
import amulogo from "./images/Amu-logo.png";

function Navbar() {
  return (
    <div className=" bg-opacity-60   h-[40%]  ">
      <div className=" mx-auto flex opacity-90  bg-black/70 items-center justify-around h-28 ">
        <div className="text-white text-2xl font-bold flex items-center">
          <img src={amulogo} alt="Logo" className="h-20 mr-2 hover:h-28 absolute hover:w-32 " />
        </div>
        <nav className=" ml-16" >
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-white text-2xl font-serif  hover:underline  ">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#themes" className="text-white text-2xl font-serif hover:underline   ">
                THEMES
              </a>
            </li>
            <li>
              <a href="#prizes" className="text-white text-2xl font-serif hover:underline  ">
              PRIZES
              </a>
            </li>
            <li>
              <a href="#team" className="text-white text-2xl font-serif hover:underline  ">
                TEAM
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-white text-2xl font-bold flex mr-16 items-center  ">
          <img src={logo} alt="Logo" className="h-28  hover:h-32   absolute hover:w-32 " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
