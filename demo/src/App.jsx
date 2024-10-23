import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/app.css";
import Home from "./pages/Home";
import Loader from "./pages/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust animation duration
    });

    // GSAP loader animation
    gsap.to("#loader", {
      opacity: 0,
      duration: 1.5,
      delay: 4,
      onComplete: () => {
        setLoading(false);
      },
    });
  }, []);

  return (
    <>
      {loading && (
        <div id="loader" className="loader flex-col">
          <motion.div
            // initial={{ scale: 0.5, opacity: 0 }}
            // animate={{ scale: 0, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="loader-animation"
          ></motion.div>
          <Loader />
          <h1 className="text-3xl">loading..</h1>
        </div>
      )}

      {/* Main Content */}
      {!loading && <Home />}
    </>
  );
};

export default App;
