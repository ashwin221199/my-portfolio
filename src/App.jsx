/**
 * node modules
 */
import { ReactLenis,  } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * components
 */
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skils from "./components/skils"
import Work from "./components/Work"
import Review from "./components/Review"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {

  useGSAP(()=>{
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element)=>{
      gsap.to(element, {
        scrollTrigger:{
          trigger: element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub:true,
        },
        y: 0,
        duration: 1,
        opacity:1,
        ease: "power2.out",
      })
    })
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero/>
        <About />
        <Skils/>
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App