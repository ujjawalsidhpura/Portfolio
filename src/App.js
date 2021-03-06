import { useEffect } from "react";
import CustomChatbot from "./chatbot/ChatBot";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Aos from "aos";
import 'aos/dist/aos.css';

export default function App() {

  useEffect(() => {
    Aos.init({
      once: true
    })
  })

  return (
    <div className="bg-zinc-100">
      <div className="min-h-screen max-w-screen-2xl m-auto py-10 px-3 sm:px-5 bg-zinc-100 ">

        <div data-aos='fade-down' data-aos-duration='800'>
          <Card />
        </div>

        <div data-aos='fade-down' data-aos-duration='800' data-aos-delay='400'>
          <About />
        </div>

        <div data-aos='fade-down' data-aos-duration='800' data-aos-delay='800'>
          <Projects />
        </div>

        <div data-aos='fade-down' data-aos-duration='800' data-aos-delay='500'>
          <Skills />
        </div>
        <CustomChatbot />
        <Footer />
      </div >
    </div>
  )
}
