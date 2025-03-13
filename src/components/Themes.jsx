import { University } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { CircleDollarSign } from "lucide-react";

function Themes() {
  return (

    <div id="themes"  className="  grid col-end-3 row-end-2 text-white md:w-3/4 mx-auto m-20 ">
    

      <h1 className="flex text-center justify-center text-5xl font-serif m-5 ">
        THEMES
      </h1>
      <div className="flex  justify-around m-10   " >
        <span className="size-50  flex-col flex  items-center justify-center bg-gray-950 rounded-2xl  " >
          <   University size={48}/>
          <h1>Education</h1>
        </span>
        <span className="size-50  flex-col flex items-center justify-center bg-gray-950   rounded-2xl cursor-pointer  ">
          <HeartPulse size={48} />
          <h1>HealthCare</h1>
        </span>
        <span className=" size-50 flex-col flex items-center justify-center bg-gray-950    rounded-2xl cursor-pointer  ">
          <CircleDollarSign size={48} />
          <h1>Finance</h1>
        </span>
      </div>

      <div className="flex  justify-around m-10 " >
        <span className=" size-50 flex-col flex items-center justify-center bg-gray-950   rounded-2xl cursor-pointer ">
          <University size={48} />
          <h1>Education</h1>

        </span>
        <span className="size-50 flex-col flex items-center justify-center bg-gray-950   rounded-2xl cursor-pointer ">
          <HeartPulse size={48} />
          <h1>Health Care</h1>
        </span>
        <span className="size-50 flex-col flex items-center justify-center bg-gray-950  rounded-2xl cursor-pointer ">
          <CircleDollarSign  size={48}/>
          <h1>Finance</h1>
        </span>
      </div>
   
    </div>
  );
}

export default Themes;
