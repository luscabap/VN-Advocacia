import { AboutUs } from "./Components/About";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import banner from "/public/assets/s1.png";

function App() {
  return (
    <>
      <Header />
      <img src={banner} alt="Banner de advocacia"/>
      <div className="px-4">
        <Home />
        <AboutUs />
      </div>
    </>
  )
}

export default App
