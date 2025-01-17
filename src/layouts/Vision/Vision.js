import React from "react";
import Title from "components/Title/Title";
import styles from "./Vision.module.css";
import logo1 from "assets/images/logo1.png";
import logo2 from "assets/images/logo-2.png";
import useMediaQuery from "hooks/useMediaQuery";

const Card = ({ title, content, reverse = false }) => {
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");

  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className="mb-15px">
        <div
          className={`${styles.title} relative yellow ${
            isBellow1200px ? "fs-24px" : "fs-40px"
          } weight-6 mb-5px`}
        >
          {title}
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
        </div>
      </div>

      <div className={styles.cardContent}>{content}</div>
    </div>
  );
};

function Vision() {
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");

  return (
    <div className="container-wrapper">
      <Title
        title="Vision"
        className={`text-center ${isBellow1200px ? "mb-30px" : "mb-50px"} `}
      />

      <div className={`${styles.header} mb-50px`}>
        <h1
          className={`white uppercase ${
            isBellow1200px ? "fs-22px" : "fs-30px"
          }  weight-5 lh-1_3`}
        >
          THREE things that define <br /> Empyreals
        </h1>
        <div className={styles.logo}>
          <img src={logo2} className="blend-mode-screen" alt="" />
          <img src={logo1} className="blend-mode-screen" alt="" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.left}>
          <Card
            title="Investing"
            content={
              <>
                <h2
                  className={`white weight-4 ${
                    isBellow1200px ? "fs-14px" : "fs-20px"
                  } mb-20px`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae ut sequi soluta cumque aliquam tempora labore
                  minima. Eaque, nihil aut nam labore quidem facere fugit porro
                  officia reiciendis enim modi!Eaque, nihil aut nam labore
                  quidem facere fugit porro officia reiciendis enim modi!
                </h2>

                <ol
                  className="list-style-type-decimal mb-25px"
                  style={{ marginLeft: "3%" }}
                >
                  <li
                    className={`white weight-4 ${
                      isBellow1200px ? "fs-14px" : "fs-20px"
                    } mb-10px`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    distinctio praesentium voluptatum, iste alias quidem ad
                    magni at est laborum mollitia{" "}
                  </li>
                  <li
                    className={`white weight-4 ${
                      isBellow1200px ? "fs-14px" : "fs-20px"
                    } mb-10px`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    distinctio praesentium voluptatum, iste alias quidem ad
                    magni at est laborum mollitia{" "}
                  </li>
                  <li
                    className={`white weight-4 ${
                      isBellow1200px ? "fs-14px" : "fs-20px"
                    } `}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    distinctio praesentium voluptatum, iste alias quidem ad
                    magni at est laborum mollitia{" "}
                  </li>
                </ol>

                <h2
                  className={`white weight-4 ${
                    isBellow1200px ? "fs-14px" : "fs-20px"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae ut sequi soluta cumque aliquam tempora labore
                  minima. Eaque, nihil aut nam labore quidem facere fugit porro
                  officia reiciendis enim modi!Eaque, nihil aut nam labore
                  quidem facere fugit porro officia reiciendis enim modi!
                </h2>
              </>
            }
          />
        </div>
        <div className={styles.right}>
          <Card
            title="Fashion"
            reverse={true}
            content={
              <>
                <h2
                  className={`white weight-4 ${
                    isBellow1200px ? "fs-14px" : "fs-20px"
                  } `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae ut sequi soluta cumque aliquam tempora labore
                  minima. Eaque, nihil aut nam labore quidem facere fugit porro
                  officia reiciendis enim modi!Eaque, nihil aut nam labore Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                  ut sequi soluta cumque aliquam tempora labore minima. Eaque,
                  nihil aut nam labore quidem facere fugit porro officia
                  reiciendis enim modi!Eaque, nihil aut nam labore quidem facere
                  fugit porro officia reiciendis enim modi!
                </h2>
              </>
            }
          />

          <Card
            title="Gaming"
            reverse={true}
            content={
              <>
                <h2
                  className={`white weight-4 ${
                    isBellow1200px ? "fs-14px" : "fs-20px"
                  } mb-25px`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae ut sequi soluta cumque aliquam tempora labore
                  minima. Eaque, nihil aut nam labore quidem facere fugit porro
                  officia reiciendis enim modi!Eaque, nihil aut nam labore Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                  ut sequi soluta cumque aliquam tempora labore minima. Eaque,
                  nihil aut nam labore quidem facere fugit porro officia
                  reiciendis enim modi!Eaque, nihil aut nam labore quidem facere
                  fugit porro officia reiciendis enim modi!
                </h2>
                <h2
                  className={`white weight-4 ${
                    isBellow1200px ? "fs-14px" : "fs-20px"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae ut sequi soluta cumque aliquam tempora labore
                  minima. Eaque, nihil aut nam labore quidem facere fugit porro
                  officia reiciendis enim modi!Eaque, nihil aut nam labore Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Vision;
