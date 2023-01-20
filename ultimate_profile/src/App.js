import "./App.css";
import lineWobbleLight from "./images/wassle.gif";
import lineWobbleDark from "./images/wobble.gif";
import eyeIcon from "./images/eye-icon.svg";
import rightArrow from "./images/curved-arrow-right.svg";
import cross from "./images/cross.svg";
import rightArrowDark from "./images/curved-arrow-right-dark.svg";
import crossDark from "./images/darkCross.svg";
import ccLogoDark from "./images/CC-logo-black.svg";
import ccLogoLight from "./images/CC-logo-wht.svg";

import { useState, useEffect } from "react";

import { Work } from "./Work";

import { AnimCursor } from "./components/AnimCursor";

function App() {
  const [titleHover, setTitleHover] = useState(false);
  const [socialHover, setSocialHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <AnimCursor />
      <body className={titleHover ? "body-light" : "body-dark"}>
        <nav id={titleHover ? "nav-light" : null}>
          <div
            id="nav-logo-section"
            className={titleHover ? "nav-section-light" : "nav-section"}
          >
            <a href="#">
              <img
                className="cc-logo"
                src={titleHover ? ccLogoDark : ccLogoLight}
                alt="CC-logo"
              />
            </a>
          </div>
          <div
            id="nav-link-section"
            className={titleHover ? "nav-section-light" : "nav-section"}
          >
            <a href="#">ABOUT</a>
            <a href="#">WORK</a>
          </div>
          <div
            id={titleHover ? "nav-social-section-dark" : "nav-social-section"}
            className={titleHover ? "nav-section-light" : "nav-section"}
            onMouseEnter={(e) => {
              setSocialHover(true);
            }}
            onMouseLeave={(e) => {
              setSocialHover(false);
            }}
          >
            {/* <div className="nav-social-icons"> */}
            <a
              href="#"
              className={socialHover ? "linked-icon-fade" : "linked-icon"}
            >
              linkedin
            </a>
            {/* <a href="#">
                <img
                  className={socialHover ? "linked-icon" : "linked-icon-fade"}
                  src={linkedinIcon}
                />
              </a> */}
            {/* </div> */}
            <a href="#">dribble</a>
            <a href="#">github</a>
          </div>
          <div
            id={titleHover ? "nav-contact-section-dark" : "nav-contact-section"}
            className={titleHover ? "nav-section-light" : "nav-section"}
          >
            <a href="#">CONTACT ME</a>
          </div>
        </nav>
        {/* <Work /> */}
        <main>
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
              <p id={titleHover ? "article-description-light" : null}>
                Hi my name's Carl and I'm an aspiring front-end software
                developer and designer.
              </p>
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
              <div className="article-title-container">
                <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                  SOFTWARE DEVELOPER
                </h1>
                <h1 className={titleHover ? "title-hovered" : "title-neutral"}>
                  UI DESIGNER
                </h1>
              </div>
              <a href="#">
                <img
                  className={
                    titleHover
                      ? "article-title-cross"
                      : "article-title-cross-hover"
                  }
                  src={titleHover ? crossDark : cross}
                  alt="cross"
                />
              </a>
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
              </button>
            </div>
          </article>
        </main>
      </body>
    </div>
  );
}

export default App;
