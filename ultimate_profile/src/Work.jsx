import colortoneImage from "./images/colortone.jpg";
import structionImage from "./images/struction-promo.jpg";
import arrowRight from "./images/curved-arrow-right.svg";
import arrowLeft from "./images/curved-arrow-left.svg";

import { useState } from "react";

export const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <main>
      {activeIndex == 0 ? (
        <article
          data-index="0"
          data-status={activeIndex == 0 ? "active" : "inactive"}
        >
          <div className="article-image-section article-section">
            <img src={colortoneImage} alt="mockup of a fashion app"></img>
          </div>
          <div className="article-description-section article-section">
            <p>
              A concept design for a project created by Carl. Colortone will
              change the way users shop for clothing and makeup.
            </p>
          </div>
          <div className="article-title-section article-section">
            <h2>COLORTONE (CONCEPT ART)</h2>
            <a href="#">
              <h2>+</h2>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <img src={arrowLeft} alt="arrow right" />
            </button>
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img src={arrowRight} alt="arrow right" />
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
            <p>
              A concept design for a project during Carl's time at Northcoders
              bootcamp. Struction is a job management tool for construction
              companies.
            </p>
          </div>
          <div className="article-title-section article-section">
            <h2>STRUCTION (CONCEPT ART)</h2>
            <a href="#">
              <h2>+</h2>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <img src={arrowLeft} alt="arrow right" />
            </button>
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img src={arrowRight} alt="arrow right" />
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
            <img src={colortoneImage} alt="mockup of a fashion app"></img>
          </div>
          <div className="article-description-section article-section">
            <p>
              A concept design for a project created by Carl. Colortone will
              change the way users shop for clothing and makeup.
            </p>
          </div>
          <div className="article-title-section article-section">
            <h2>COLORTONE (CONCEPT ART)</h2>
            <a href="#">
              <h2>+</h2>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <img src={arrowLeft} alt="arrow right" />
            </button>
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img src={arrowRight} alt="arrow right" />
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
            <img src={colortoneImage} alt="mockup of a fashion app"></img>
          </div>
          <div className="article-description-section article-section">
            <p>
              A concept design for a project created by Carl. Colortone will
              change the way users shop for clothing and makeup.
            </p>
          </div>
          <div className="article-title-section article-section">
            <h2>COLORTONE (CONCEPT ART)</h2>
            <a href="#">
              <h2>+</h2>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleLeftClick(e)}
            >
              <img src={arrowLeft} alt="arrow right" />
            </button>
            <button
              className="article-nav-button"
              type="button"
              onClick={(e) => handleRightClick(e)}
            >
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </article>
      ) : null}
    </main>
  );
};
