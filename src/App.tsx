import { AboutUs } from "./Components/About";
import { Expertise } from "./Components/Expertise";
import { FindUs } from "./Components/FindUs";
import { Footer } from "./Components/Footer";
import { FormContact } from "./Components/FormContact";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import banner from "/assets/s1.png";

function App() {
  return (
    <>
      <Header />
      <img src={banner} alt="Banner de advocacia"/>
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
