import { Link } from "react-router"
import csslogo from "../components/images/a.png"
function Footer() {
  return (
    <div className="text-white mx-auto flex flex-col p-10 mt-10 items-center " >
        <div>
            <img src={csslogo} alt="" className="w-20  mx-auto" />
            <p>Computer Science Society</p>
        </div>
        <div>
            <p>Copywrite © 2025 - All rights reserved </p>
        </div>
        <div>
            {/* all links from lucid react */}
        </div>
        {/* <div>
            <p>Contact us at: <Link to="/">xyz@gmail.com</Link> </p>
        </div> */}
    </div>
  )
}

export default Footer