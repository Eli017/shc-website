import React, { useState } from "react";
import * as styles from "./signIn.module.scss";
import MySHCLogo from "../../assets/icons/MySHC.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseMessage, setFirebaseMessage] = useState(null);

  const submitForm = () => {
    //TODO: Implement Firebase Auth and User data pull
    return true;
  };

  return (
    <main className={styles.signIn}>
      {firebaseMessage && (
        <section className={styles.messageSection}>
          <h3 className={styles.message}>{firebaseMessage}</h3>
          <button onClick={() => setFirebaseMessage(null)}>X</button>
        </section>
      )}
      <section className={styles.signInForm}>
        <img src={MySHCLogo} alt={"MySHC Logo"} title={"MySHC Logo"} className={styles.logo} />
        <form>
          <h1 className={styles.formTitle}>Sign Up</h1>
          <label htmlFor={"email"} className={styles.label}>
            * BSU Email:
          </label>
          <input
            required={true}
            type={"email"}
            name={"email"}
            placeholder={"ccardinal@bsu.edu"}
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor={"password"} className={styles.label}>
            * Password:
          </label>
          <input
            required={true}
            type={"password"}
            name={"password"}
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type={"button"} className={styles.submit} onClick={() => submitForm()}>
            Submit
          </button>
          <p>Required Fields are Marked with *</p>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
