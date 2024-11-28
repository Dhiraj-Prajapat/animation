import "../styles/home.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../utils/animation";

function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <>
  <motion.div ref={ref} className="box" style={{ x, y }} />
  <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

        <div className="homepage">
            <header className="header">
              <h1>Welcome to My Website</h1>
              <p>Scroll down to see AOS animations</p>
            </header>

            <section data-aos="fade-right">
              <h2>Section 1</h2>
              <p>This section fades up using AOS.</p>
            </section>

            <section data-aos="fade-left">
              <h2>Section 2</h2>
              <p>This section fades right using AOS.</p>
            </section>

            <section data-aos="fade-right">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>

            <section data-aos="fade-left">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>
            <section data-aos="fade-right">
              <h2>Section 1</h2>
              <p>This section fades up using AOS.</p>
            </section>

            <section data-aos="fade-left">
              <h2>Section 2</h2>
              <p>This section fades right using AOS.</p>
            </section>

            <section data-aos="fade-right">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>

            <section data-aos="fade-left">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>
            <section data-aos="fade-right">
              <h2>Section 1</h2>
              <p>This section fades up using AOS.</p>
            </section>

            <section data-aos="fade-left">
              <h2>Section 2</h2>
              <p>This section fades right using AOS.</p>
            </section>

            <section data-aos="fade-right">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>

            <section data-aos="fade-left">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>
            <section data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <h2>Section 1</h2>
              <p>This section fades up using AOS.</p>
            </section>

            <section data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <h2>Section 2</h2>
              <p>This section fades right using AOS.</p>
            </section>

            <section data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>

            <section data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <h2>Section 3</h2>
              <p>This section fades left using AOS.</p>
            </section>
           
            
          </div>
        </motion.div>
  </>;
}

export default  Home
