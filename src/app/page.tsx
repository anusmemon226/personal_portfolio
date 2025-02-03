import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

export default function Home() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Resume/>
    </div>
  )
}
