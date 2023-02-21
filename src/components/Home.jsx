import React from "react";

//images
import lineWobbleLight from "../images/wassle.gif";
import lineWobbleDark from "../images/wobble.gif";
// import eyeIcon from "../images/eye-icon.svg";
import cross from "../images/icons/cross.svg";
import crossDark from "../images/icons/darkCross.svg";
import rightArrow from "../images/icons/curved-arrow-right.svg";
import rightArrowDark from "../images/icons/curved-arrow-right-dark.svg";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = ({ titleHover, setTitleHover }) => {
  const [workHover, setWorkHover] = useState(false);

  const loadInitial = { y: 50, opacity: 0.01 };
  const loadMotion = { y: 0, opacity: 1 };
  const loadTransition = { speed: 0.01, delay: 0.4 };

  return (
    <motion.main>
      <article>
        <div className="article-image-section article-section">
          <img
            src={titleHover ? lineWobbleLight : lineWobbleDark}
            alt="mockup of a fashion app"
          ></img>
        </div>
        <div
          className="article-description-section article-section"
          id={
            titleHover
              ? "article-description-home-light"
              : "article-description-home"
          }
        >
          <motion.p
            initial={loadInitial}
            animate={loadMotion}
            transition={{ opacity: { delay: 1, speed: 5 } }}
            whileHover={{ y: -10 }}
            id={titleHover ? "article-description-light" : null}
          >
            Hi my name's Carl and I'm an aspiring front-end software developer
            and designer
          </motion.p>
        </div>
        <div
          className="article-title-section article-section"
          id={titleHover ? "article-title-light" : null}
          onMouseEnter={(e) => {
            setTitleHover(true);
          }}
          onMouseLeave={(e) => {
            setTitleHover(false);
          }}
        >
          <motion.div
            initial={loadInitial}
            animate={loadMotion}
            transition={loadTransition}
            className="article-title-container"
          >
            <h1 id={titleHover ? "title-hovered" : "title-neutral"}>
              SOFTWARE DEVELOPER
            </h1>
            <h1 id={titleHover ? "title-hovered" : "title-neutral"}>
              UI DESIGNER
            </h1>
          </motion.div>
          <img
            className={
              titleHover ? "article-title-cross" : "article-title-cross-hover"
            }
            src={titleHover ? crossDark : cross}
            alt="cross"
          />
        </div>
        <div
          className="article-nav-section article-section"
          id={titleHover ? "article-nav-light" : null}
          onMouseEnter={(e) => {
            setWorkHover(true);
          }}
          onMouseLeave={(e) => {
            setWorkHover(false);
          }}
        >
          <button
            className="article-nav-button"
            type="button"
            onClick={console.log("to work")}
          >
            <Link to="/work">
              <div className="article-nav-btn-container">
                <div
                  className={
                    workHover ? "move-work-arrow-hover" : "move-work-arrow"
                  }
                  id={titleHover ? null : "work-box"}
                >
                  <h2>MY WORK</h2>
                  <br />
                  <div className="work-with-arrow">
                    <h2>MY WORK</h2>
                    <img
                      src={titleHover ? rightArrowDark : rightArrow}
                      alt="right arrow"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </button>
        </div>
      </article>
    </motion.main>
  );
};
