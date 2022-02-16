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
    <div class="flex">

      <aside class="h-screen sticky top-0 p-4">

        <div data-aos='fade-down' data-aos-duration='800'>
          <Card />
        </div>

      </aside>

      <main>
        <div data-aos='fade-down' data-aos-duration='800' data-aos-delay='800'>
          <Projects />
        </div>

        <CustomChatbot />
        <Footer />
      </main>
    </div>
  )
}



