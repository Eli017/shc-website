import React, { useContext, useState } from "react";
import { firestore, auth } from "firebase";
import * as styles from "./signUp.module.scss";
import MySHCLogo from "../../assets/icons/MySHC.png";
import { AuthContext } from "../../App";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseMessage, setFirebaseMessage] = useState(null);

  const authContext = useContext(AuthContext);

  const addFirebaseUser = () => {
    const db = firestore();
    let userRef = db.collection("users");
    userRef
      .doc(email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirebaseMessage("User Already Exists!");
        } else {
          userRef
            .set({
              email: email,
              name: name,
            })
            .then((doc) => {
              auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                  authContext.setLoginSession(doc.data());
                })
                .catch(() => {
                  setFirebaseMessage("Error Logging In! Contact Admin");
                });
            })
            .catch(() => {
              setFirebaseMessage("Error creating User, contact admin");
            });
        }
      });
  };

  const checkRequiredFields = () => {
    if (email.length === 0 || password.length === 0 || name.length === 0) {
      setFirebaseMessage("Email is required");
      return false;
    } else if (name.length === 0) {
      setFirebaseMessage("Name is required");
      return false;
    } else if (password.length === 0) {
      setFirebaseMessage("Password is required");
      return false;
    } else {
      return true;
    }
  };

  const submitForm = () => {
    if (checkRequiredFields() === false) {
      return;
    }
    if (!email.includes("@bsu.edu")) {
      setFirebaseMessage("Not a valid BSU email");
    } else {
      addFirebaseUser();
    }
  };

  return (
    <main className={styles.signUp}>
      {firebaseMessage && (
        <section className={styles.messageSection}>
          <h3 className={styles.message}>{firebaseMessage}</h3>
          <button onClick={() => setFirebaseMessage(null)}>X</button>
        </section>
      )}
      <section className={styles.signUpForm}>
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
          <label htmlFor={"name"} className={styles.label}>
            * Name:
          </label>
          <input
            required={true}
            type={"text"}
            name={"name"}
            placeholder={"Charlie Cardinal"}
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default SignUp;
