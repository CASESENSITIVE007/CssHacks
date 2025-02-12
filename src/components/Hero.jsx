import { useState, useEffect } from "react";

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
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 text-white">
        <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1>
        <div className="text-2xl bg-gray-900 p-4 rounded-lg shadow-lg">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s
        </div>
      </div>
    </div>
  );
}

export default Hero;
