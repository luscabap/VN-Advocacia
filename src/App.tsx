import { AnimatePresence } from "framer-motion";
import { AboutUs } from "./Components/About";
import { CarouselImages } from "./Components/CarouselImages";
import { Expertise } from "./Components/Expertise";
import { FindUs } from "./Components/FindUs";
import { Footer } from "./Components/Footer";
import { FormContact } from "./Components/FormContact";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { ModalWhatsApp } from "./Components/ModalWhatsapp";
import { OurTeam } from "./Components/OurTeam";
function App() {
  return (
    <div>
      <Header />
      <div className="z-40 pt-36 flex items-center justify-center" id="home">
        <CarouselImages />
      </div>
      <div className="px-4 mt-8
        lg:px-20  lg:text-xl 
        2xl:px-80 2xl:text-2xl"
      >
        <Home />
        <Expertise />
        <AboutUs />
        <OurTeam />
        <FormContact />
        <FindUs />
      </div>
      <AnimatePresence>
        <ModalWhatsApp />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
