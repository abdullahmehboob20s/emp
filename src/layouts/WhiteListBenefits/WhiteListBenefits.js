import Title from "components/Title/Title";
import React from "react";
import styles from "./WhiteListBenefits.module.css";

const Card = ({ title, desc, reverse = false }) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""} relative`}>
      <div className={styles.lineWrapper}>
        {/* <div className={styles.circle}></div> */}
        <div className={styles.line}></div>
      </div>
      <div className="mb-10px">
        <h5 className={`${styles.cardTitle} relative fs-16px yellow weight-5 `}>
          {title}
        </h5>
      </div>
      <div className="fs-14px white weight-4 lh-1_4">{desc}</div>
    </div>
  );
};

function WhiteListBenefits() {
  return (
    <div>
      <Title title="Whitelist Benefits" className="text-center mb-50px" />

      <div className="">
        <div className="container-wrapper">
          <div className={`${styles.section}`}>
            <Card
              title="Discount"
              desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
            />
            <Card
              title="Discount"
              desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
            />
            <Card
              title="Discount"
              desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
            />
            <Card
              title="Discount"
              desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
            />
            <Card
              title="Discount"
              desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
            />
            <Card
              title="Discount"
              desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
            />
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className={`${styles.section}`}>
          <Card
            reverse={true}
            title="Discount"
            desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
          />
          <Card
            reverse={true}
            title="Discount"
            desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
          />
          <Card
            reverse={true}
            title="Discount"
            desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
          />
          <Card
            reverse={true}
            title="Discount"
            desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
          />
          <Card
            reverse={true}
            title="Discount"
            desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
          />
          <Card
            reverse={true}
            title="Discount"
            desc="Fugit et delectus explicabo labore, possimus repudiandae nam quaerat deserunt voluptatibus "
          />
        </div>
      </div>
    </div>
  );
}

export default WhiteListBenefits;
