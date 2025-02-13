import { useState, useEffect } from "react";
import { Button } from "./ui/button";
function Hero() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10); // 10 days from now

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Re-run when timeLeft changes

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="src/components/images/bg2.mp4" type="video/mp4" />
      </video>

      {/* Countdown Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 text-white transition delay-200 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <h1 className="text-6xl font-[cursive] mb-2 ">AMUHACKS 4.O</h1>
        <h1 className="text-4xl mb-2 ">(Date)</h1>
        <Button className="hover:bg-amber-500 m-4 text-xl animate-bounce   ">Apply Here</Button>
        <div className="text-2xl p-4 rounded-lg shadow-lg flex  ">
          {/* {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s */}

          <span className="mr-3 rounded-lg shadow-lg bg-gray-700 text-indigo-700  flex items-center justify-center h-20 w-20 ">
          {timeLeft.days}d
          </span>
          <span className="mr-3 rounded-lg shadow-lg bg-gray-700   flex items-center justify-center h-20 w-20  text-fuchsia-600 ">
          {timeLeft.hours}h
          </span>
          <span className="mr-3 rounded-lg shadow-lg bg-gray-700 text-amber-600   flex items-center justify-center h-20 w-20    ">
          {timeLeft.minutes}m
          </span>
          <span className="rounded-lg shadow-lg bg-gray-700 text-emerald-500   flex items-center justify-center h-20 w-20 ">
          {timeLeft.seconds}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
