import React from "react";
import ccLogoDark from "../images/icons/cc-dark.svg";
import ccLogoLight from "../images/icons/cc-light.svg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export const Nav = ({ titleHover, setContactHover, setSocialHover }) => {
  return (
    <div>
      <nav id={titleHover ? "nav-light" : null}>
        <motion.div
          id="nav-logo-section"
          className={titleHover ? "nav-section-light" : "nav-section"}
        >
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.4 }}
              className="cc-logo"
              src={titleHover ? ccLogoDark : ccLogoLight}
              alt="CC-logo"
            />
          </Link>
        </motion.div>
        <div
          id="nav-link-section"
          className={titleHover ? "nav-section-light" : "nav-section"}
        >
          <a href="#">ABOUT</a>
          <Link to="/work">WORK</Link>
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
          <a
            href="https://www.linkedin.com/in/carl-clifton-51825364/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>

          <a
            href="https://dribbble.com/ClifCarlton"
            target="_blank"
            rel="noreferrer"
          >
            dribble
          </a>
          <a
            href="https://github.com/Carl-with-a-C"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </div>
        <div
          id={titleHover ? "nav-contact-section-dark" : "nav-contact-section"}
          className={titleHover ? "nav-section-light" : "nav-section"}
        >
          <a
            href="mailto:carlbclifton@gmail.com"
            onMouseEnter={(e) => {
              setContactHover(true);
            }}
            onMouseLeave={(e) => {
              setContactHover(false);
            }}
          >
            CONTACT ME
          </a>
        </div>
        <div
          className={titleHover ? "nav-section-light" : "nav-section"}
          id="nav-menu"
        >
          <div className="nav-menu-text">MENU</div>
          <div className="nav-menu--burger">
            <div className="nav-menu-burger--top-line"></div>
            <div className="nav-menu-burger--bottom-line"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};
