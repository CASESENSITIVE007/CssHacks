import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Themes from "./components/Themes";

function App() {
  return (
    <div className="bg-black">
      <div>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsinline
        >
          <source src="/bg2.mp4" type="video/mp4" />
        </video>

        <Navbar />
        <Hero />
      </div>

      <Themes />
      <Team />
    </div>
  );
}

export default App;
