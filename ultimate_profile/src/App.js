import "./App.css";
//components
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { AnimCursor } from "./components/AnimCursor";
import { InitialTransition } from "./components/InitialTransitions";

// import hand from "./images/hand.svg";

//effects/libraries
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [titleHover, setTitleHover] = useState(false);
  const [socialHover, setSocialHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadInitial = { y: 50, opacity: 0.01 };
  const loadMotion = { y: 0, opacity: 1 };
  const loadTransition = { speed: 0.01, delay: 0.4 };
  const loadAnimation = {
    loadInitial,
    loadMotion,
    loadTransition,
  };

  return (
    <motion.div className="App">
      <AnimCursor contactHover={contactHover} socialHover={socialHover} />
      <body className={titleHover ? "body-light" : "body-dark"}>
        <AnimatePresence>
          <InitialTransition />
          <Nav
            titleHover={titleHover}
            setContactHover={setContactHover}
            setSocialHover={setSocialHover}
            key="navBar"
          />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  titleHover={titleHover}
                  setTitleHover={setTitleHover}
                  key="home"
                />
              }
            />
            <Route
              path="/work"
              element={
                <Work
                  titleHover={titleHover}
                  setTitleHover={setTitleHover}
                  key="work"
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </body>
    </motion.div>
  );
}

export default App;
