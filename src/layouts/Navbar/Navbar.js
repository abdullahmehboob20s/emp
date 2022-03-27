import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import logo1 from "assets/images/logo1.png";
import logo2 from "assets/images/logo-2.png";
import { Link } from "react-router-dom";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import useMediaQuery from "hooks/useMediaQuery";
import { HiOutlineLink } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";
import { FaBabyCarriage } from "react-icons/fa";
import hamburger from "assets/images/hamburger.png";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { GrFormClose } from "react-icons/gr";
import { Link as ReactScroll } from "react-scroll";

function Navbar() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow700px = useMediaQuery("(max-width : 700px)");
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = OutsideClickDetector(() => {
    setShowMenu(false);
  });

  return (
    <div>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.Left}>
            <Link to="/" className={styles.logo}>
              <Fade
                direction="up"
                delay={400}
                duration={400}
                triggerOnce={true}
                cascade={true}
                className="blend-mode-screen"
              >
                <img
                  src={logo1}
                  className={`${styles.logo1} blend-mode-screen`}
                  alt=""
                />
                <img
                  src={logo2}
                  className={`${styles.logo2} blend-mode-screen`}
                  alt=""
                />
              </Fade>
            </Link>
          </div>
          <div className={styles.Right}>
            <Fade
              direction="up"
              delay={400}
              duration={400}
              triggerOnce={true}
              cascade={true}
            >
              <Link
                to="/mint"
                className={`${
                  styles.connectBtn
                } yellow-btn white uppercase weight-7 text-center ${
                  isBellow1000px
                    ? isBellow700px
                      ? "fs-10px"
                      : "fs-12px"
                    : "fs-16px"
                } pointer`}
                id="navBar__walletBtn"
              >
                Mint Now
                {/* {isBellow700px ? <FaBabyCarriage size={20} /> : "Mint Now"} */}
              </Link>
            </Fade>

            <div className={`black-screen ${showMenu ? "show" : ""}`}></div>

            <div className={`${styles.menuWrapper} relative`}>
              <button
                className={styles.hamburger}
                onClick={() => setShowMenu(!showMenu)}
              >
                <img src={hamburger} className="w-full" alt="" />
              </button>

              <div
                className={`${styles.menu} ${showMenu ? styles.open : ""}`}
                ref={menuRef}
              >
                <div className={styles.navbarLinks}>
                  <button
                    className={styles.closeIcon}
                    onClick={() => setShowMenu(false)}
                  >
                    <GrFormClose size={40} />
                  </button>
                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8 `}
                    spy={true}
                    onClick={() => setShowMenu(false)}
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Collection
                  </ReactScroll>
                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8`}
                    spy={true}
                    offset={-100}
                    onClick={() => setShowMenu(false)}
                    to="story"
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Origin Story
                  </ReactScroll>

                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8 `}
                    spy={true}
                    offset={-100}
                    onClick={() => setShowMenu(false)}
                    to="roadmap"
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Roadmap
                  </ReactScroll>
                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8 `}
                    spy={true}
                    offset={-100}
                    onClick={() => setShowMenu(false)}
                    to="vision"
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Vision
                  </ReactScroll>
                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8 `}
                    spy={true}
                    offset={-100}
                    onClick={() => setShowMenu(false)}
                    to="whitelist"
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Whitelist Benefits
                  </ReactScroll>
                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8 `}
                    spy={true}
                    offset={-100}
                    onClick={() => setShowMenu(false)}
                    to="team"
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Team
                  </ReactScroll>
                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8 `}
                    spy={true}
                    offset={-100}
                    onClick={() => setShowMenu(false)}
                    to="terms"
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Terms
                  </ReactScroll>
                  <ReactScroll
                    activeClass={`${styles.reactScrollActive} ${
                      isBellow700px ? "fs-26px" : "fs-36px"
                    } weight-8 `}
                    spy={true}
                    offset={-100}
                    onClick={() => setShowMenu(false)}
                    to="links"
                    className={`${styles.reactScroll} ${
                      isBellow700px ? "fs-22px" : "fs-26px"
                    } weight-5 pointer black mb-15px block`}
                  >
                    Links
                  </ReactScroll>
                </div>

                <div>
                  <Link
                    to="/mint"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                    }}
                    className={`${
                      styles.connectBtn
                    } yellow-btn white uppercase weight-7 text-center w-fit-content mb-20px ${
                      isBellow1000px ? "fs-12px" : "fs-16px"
                    } pointer`}
                    id="navBar__walletBtn"
                  >
                    Mint Now
                  </Link>

                  <div className={styles.socialIcon}>
                    <a
                      href="https://twitter.com/EmpyrealsNFT"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BsTwitter size={isBellow1000px ? 24 : 41} />
                    </a>
                    <a
                      href="https://discord.gg/myKgHJ84QJ"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BsDiscord size={isBellow1000px ? 24 : 40} />
                    </a>
                    <a
                      href="https://www.instagram.com/empyrealsnft/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiFillInstagram size={isBellow1000px ? 24 : 43} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
