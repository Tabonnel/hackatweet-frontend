import styles from "../styles/SignUp.module.css";
import Image from "next/image";
import { useState } from "react";

function SignUp() {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstname, setsignUpFirstname] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  console.log(signUpFirstname, signUpPassword, setSignUpUsername)

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.logoSignUpContainer}>
        <Image
          className={styles.smallLogo}
          src="/logo_twitter.png"
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <p className={styles.signUpTitles}> Create your Hackatweet account</p>
      <div className={styles.btnSignUpContainer}>
        <input className={styles.inputSignUp} placeholder="Firstname" type="text" onChange={(e) => setsignUpFirstname(e.target.value)} value={signUpFirstname} />
        <input className={styles.inputSignUp} placeholder="Username" type="text" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
        <input className={styles.inputSignUp} placeholder="Password" type="password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
        <button className={styles.btntSignUp} onClick={() => handleRegister()} >Sign Up </button>
      </div>
    </div>
  );
}

export default SignUp;
