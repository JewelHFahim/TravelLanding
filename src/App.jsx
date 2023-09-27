import { useEffect } from "react";
import MostAttractivePlace from "./components/MostAttractivePlace/MostAttractivePlace";
import Home from "./components/home/Home";
import ViewPoint from "./components/viewpoint/ViewPoint";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-Montserrat bg-[#001E23]">
        <Home />
        <MostAttractivePlace />
        <ViewPoint />
    </div>
  );
};

export default App;
