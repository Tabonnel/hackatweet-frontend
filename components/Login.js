import styles from "../styles/Login.module.css";
import SignUp from "./SignUp";
import Image from "next/image";
import { useState } from 'react';

function Login() {

  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  
  console.log(isSignUpVisible)

  const showSignUp = () => {
		setIsSignUpVisible(!isSignUpVisible);
    console.log(isSignUpVisible)

	};


  return (
    <div className={styles.container}>
      {isSignUpVisible ? (
            <div className = {styles.SignUpContainer}>
              <SignUp/>
            </div>) :''}
      <div className={styles.leftContent}>
        <div>
          <Image
            className={styles.bigLogo}
            src="/logo_twitter.png"
            alt="logo"
            width={350}
            height={220}
          />
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.loginContainer}>
          <div className={styles.LogoContainer}>
            <Image
              className={styles.smallLogo}
              src="/logo_twitter.png"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.TitleContainer}>
            <span className={styles.bigTitles}> See what's</span>
            <span className={styles.bigTitles}> happening </span>
            <p className={styles.smallTitles}> Join Hackatweet today.</p>
          </div>
          <div className={styles.btnContainer}>
            <button onClick={showSignUp } className={styles.SignIn}> Sign up</button>
            
            <p className={styles.p}> Already have an account ? </p>
            <button className={styles.SignIn}> Sign In </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
