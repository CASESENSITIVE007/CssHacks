import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-black">
        <Themes />
      </div>
    </div>
  );
}

export default App;
