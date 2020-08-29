import React, { useState } from "react";
import * as styles from "./signUp.module.scss";
import MySHCLogo from "../../assets/icons/MySHC.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const checkFirebaseUsers = () => {
    return true;
  };

  const submitForm = () => {
    return true;
  };

  return (
    <main className={styles.signUp}>
      <section>
        <img src={MySHCLogo} alt={"MySHC Logo"} title={"MySHC Logo"} className={styles.logo} />
        <form onSubmit={submitForm}>
          <h1 className={styles.formTitle}>Sign Up</h1>
          <label htmlFor={"email"} className={styles.label}>
            BSU Email:
          </label>
          <input
            type={"email"}
            name={"email"}
            placeholder={"ccardinal@bsu.edu"}
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor={"name"} className={styles.label}>
            Name:
          </label>
          <input
            type={"text"}
            name={"name"}
            placeholder={"Charlie Cardinal"}
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor={"password"} className={styles.label}>
            Password:
          </label>
          <input
            type={"password"}
            name={"password"}
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={styles.submit}>
            <input type={"submit"} name={"Submit"} />
          </label>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
