import { AboutUs } from "./Components/About";
import { CarouselImages } from "./Components/CarouselImages";
import { Expertise } from "./Components/Expertise";
import { FindUs } from "./Components/FindUs";
import { Footer } from "./Components/Footer";
import { FormContact } from "./Components/FormContact";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
function App() {
  return (
    <>
      <Header />
      <div className="z-40 pt-36 flex items-center justify-center">
        <CarouselImages />
      </div>
      <div className="px-4">
        <Home />
        <AboutUs />
        <Expertise />
        <FormContact />
        <FindUs />
      </div>
      <Footer />
  </>
  )
}

export default App
