import colortoneImage from "../images/colortone.jpg";
import structionImage from "../images/struction-promo.jpg";
import soccerbleImage from "../images/soccerble.jpg";
import getThriftyImage from "../images/get-thrifty.jpg";

import cross from "../images/icons/cross.svg";
import crossDark from "../images/icons/darkCross.svg";
import arrowRight from "../images/icons/curved-arrow-right.svg";
import arrowRightDark from "../images/icons/curved-arrow-right-dark.svg";
import arrowLeft from "../images/icons/curved-arrow-left.svg";
import arrowLeftDark from "../images/icons/curved-arrow-left-dark.svg";

import { motion } from "framer-motion";
import { useState } from "react";

export const Work = ({ titleHover, setTitleHover }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const loadInitial = { y: 50, opacity: 0.01 };
  const loadMotion = { y: 0, opacity: 1 };
  const loadTransition = { speed: 0.01, delay: 0.4 };

  const loadAnimation = {
    loadInitial,
    loadMotion,
    loadTransition,
  };

  const arrowMove = {
    transition: {
      type: "spring",
      stiffness: 400,
    },
  };

  const handleLeftClick = () => {
    activeIndex > 0
      ? setActiveIndex((prev) => prev - 1)
      : setActiveIndex((prev) => prev + 3);
  };

  const handleRightClick = () => {
    activeIndex < 3
      ? setActiveIndex((prev) => prev + 1)
      : setActiveIndex((prev) => prev - 3);
  };

  return (
    <motion.main exit={{ opacity: 0 }}>
      {activeIndex == 0 ? (
        <article
          data-index="0"
          data-status={activeIndex == 0 ? "active" : "inactive"}
        >
          <div className="article-image-section article-section">
            <img src={colortoneImage} alt="mockup of a fashion app"></img>
          </div>
          <div className="article-description-section article-section">
            <motion.p
              initial={loadInitial}
              animate={loadMotion}
              transition={{
                opacity: { delay: 1, speed: 5 },
                y: { duration: 0.01 },
              }}
              whileHover={{ y: -10 }}
              id={titleHover ? "article-description-light" : null}
            >
              A concept design for a project created by Carl. Colortone will
              change the way users shop for clothing and makeup
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
                COLORTONE
              </h1>
              <h1 id={titleHover ? "title-hovered" : "title-neutral"}>
                SHOW CONCEPT ART
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
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <motion.img
                whileHover={{ x: -10 }}
                //fix transition
                transition={{ delay: 0, duration: 0.2 }}
                src={titleHover ? arrowLeftDark : arrowLeft}
                alt="arrow right"
              />
            </button>
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img
                src={titleHover ? arrowRightDark : arrowRight}
                alt="arrow right"
              />
            </button>
          </div>
        </article>
      ) : null}
      {activeIndex == 1 ? (
        <article
          data-index="1"
          data-status={activeIndex == 1 ? "active" : "inactive"}
        >
          <div className="article-image-section article-section">
            <img src={structionImage} alt="mockup of a construction app"></img>
          </div>
          <div className="article-description-section article-section">
            <motion.p
              initial={loadInitial}
              animate={loadMotion}
              transition={{
                opacity: { delay: 1, speed: 5 },
                y: { duration: 0.01 },
              }}
              whileHover={{ y: -10 }}
              id={titleHover ? "article-description-light" : null}
            >
              A concept design for a project during Carl's time at Northcoders
              bootcamp. Struction is a job management tool for construction
              companies
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
              <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                STRUCTION
              </h1>
              <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                SHOW PROJECT
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
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <img
                src={titleHover ? arrowLeftDark : arrowLeft}
                alt="arrow right"
              />
            </button>
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img
                src={titleHover ? arrowRightDark : arrowRight}
                alt="arrow right"
              />
            </button>
          </div>
        </article>
      ) : null}
      {activeIndex == 2 ? (
        <article
          data-index="2"
          data-status={activeIndex == 2 ? "active" : "inactive"}
        >
          <div className="article-image-section article-section">
            <img src={soccerbleImage} alt="mockup of a fashion app"></img>
          </div>
          <div className="article-description-section article-section">
            <motion.p
              initial={loadInitial}
              animate={loadMotion}
              transition={{
                opacity: { delay: 1, speed: 5 },
                y: { duration: 0.01 },
              }}
              whileHover={{ y: -10 }}
              id={titleHover ? "article-description-light" : null}
            >
              Football word game project currently being developed by Carl. The
              user must guess the correct premier league football player
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
              <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                SOCCERBLE
              </h1>
              <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                SHOW PROJECT
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
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <img
                src={titleHover ? arrowLeftDark : arrowLeft}
                alt="arrow right"
              />
            </button>
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img
                src={titleHover ? arrowRightDark : arrowRight}
                alt="arrow right"
              />
            </button>
          </div>
        </article>
      ) : null}
      {activeIndex == 3 ? (
        <article
          data-index="3"
          data-status={activeIndex == 3 ? "active" : "inactive"}
        >
          <div className="article-image-section article-section">
            <img src={getThriftyImage} alt="mockup of a fashion app"></img>
          </div>
          <div className="article-description-section article-section">
            <motion.p
              initial={loadInitial}
              animate={loadMotion}
              transition={{
                opacity: { delay: 1, speed: 5 },
                y: { duration: 0.01 },
              }}
              whileHover={{ y: -10 }}
              id={titleHover ? "article-description-light" : null}
            >
              A concept design for a project buy and sell app. Get Thrifty is
              designed with simple thrift asthetics reminiscent of old
              classified adverts
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
              <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                GET THRIFTY
              </h1>
              <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                SHOW CONCEPT ART
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
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <img
                src={titleHover ? arrowLeftDark : arrowLeft}
                alt="arrow right"
              />
            </button>
            <button
              className="article-nav-button work-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img
                src={titleHover ? arrowRightDark : arrowRight}
                alt="arrow right"
              />
            </button>
          </div>
        </article>
      ) : null}
    </motion.main>
  );
};
