import { Fragment } from "react";
import styles from "./RootPage.module.css";
import { Link } from "react-router-dom";

export default function RootPage() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-around",
          width: "40%",
          height: "100vh",
        }}
        className={styles["root-page"]}
      >
        <Link to="auth/freelancer" className={styles["nav-button"]}>
          I am a Freelancer
        </Link>
        <Link to="auth/client" className={styles["nav-button"]}>
          I am a Client
        </Link>
      </div>
    </Fragment>
  );
}
