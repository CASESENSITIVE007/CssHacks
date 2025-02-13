import logo from "./images/a.png";
import amulogo from "./images/Amu-logo.png";

function Navbar() {
  return (
    <div className="bg-gray-800 p-4  ">
      <div className="container mx-auto flex items-center justify-around">
        <div className="text-white text-2xl font-bold flex items-center">
          <img src={amulogo} alt="Logo" className="h-20 mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#item1" className="text-white text-2xl font-serif ">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#item2" className="text-white text-2xl font-serif">
                THEMES
              </a>
            </li>
            <li>
              <a href="#item3" className="text-white text-2xl font-serif">
              PRIZES
              </a>
            </li>
            <li>
              <a href="#item4" className="text-white text-2xl font-serif">
                TEAM
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-white text-2xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-20 mr-2" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
