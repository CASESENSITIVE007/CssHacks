import logo from "./images/a.png";
function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-20 mr-2" />
          <p className="mb-4" >Amu Hacks</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#item1" className="text-white text-2xl ">
                Item One
              </a>
            </li>
            <li>
              <a href="#item2" className="text-white text-2xl ">
                Item Two
              </a>
            </li>
            <li>
              <a href="#item3" className="text-white text-2xl ">
                Item Three
              </a>
            </li>
            <li>
              <a href="#item4" className="text-white text-2xl ">
                Item Four
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
