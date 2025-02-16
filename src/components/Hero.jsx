import { useState, useEffect } from "react";
import { Button } from "./ui/button";
function Hero() {
  const targetDate = new Date(2025, 1, 25, 0, 0, 0);
  targetDate.setDate(targetDate.getDate() + 10); // 10 days from now

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Re-run when timeLeft changes

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/bg2.mp4" type="video/mp4" />
      </video>

      {/* Countdown Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white transition delay-200 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 size-  ">
        <h1 className="text-7xl font-serif mb-2 ">AMUHACKS 4.O</h1>
        <h1 className="text-6xl mb-2 ">(Date)</h1>
        <Button className="hover:bg-amber-500 m-4 text-2xl animate-bounce   ">
          Apply Here
        </Button>
        <div className="text-4xl p-4 rounded-lg shadow-lg flex  ">
          {/* {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s */}

          <span className="mr-3 rounded-lg shadow-lg bg-gray-700 text-indigo-500 text-5xl font-bold  flex font-serif items-center justify-center opacity-70  h-20 w-20 ">
            {timeLeft.days}d
          </span>
          <span className="mr-3 rounded-lg shadow-lg bg-gray-700   flex items-center text-4xl font-bold font-serif justify-center h-20 w-20 opacity-70 text-fuchsia-600 ">
            {timeLeft.hours}h
          </span>
          <span className="mr-3 rounded-lg shadow-lg bg-gray-700 text-amber-600 text-3xl font-bold font-serif  flex items-center opacity-70 justify-center h-20 w-20    ">
            {timeLeft.minutes}m
          </span>
          <span className="rounded-lg shadow-lg bg-gray-700 text-emerald-500 text-2xl font-bold font-serif flex items-center opacity-70 justify-center h-20 w-20 ">
            {timeLeft.seconds}s
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
