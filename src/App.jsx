
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Themes from "./components/Themes";
import Timeline from "./components/HacksTimeline"
import About from "./components/About";
import Prize from "./components/Prize";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="bg-black" >
      <div>
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

        <Navbar />
        <Hero />
      </div>
    <About/>
      <Themes />
    <Timeline/>
    <Prize/>
      <Team />
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
