import styles from "../styles/Login.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Image from "next/image";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';


function Login() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  
 

  const showSignUp = () => {
		setIsSignUpVisible(!isSignUpVisible);
    console.log(isSignUpVisible)

	};

  const showSignIn = () => {
    setIsSignInVisible(!isSignInVisible);
  };


  return (
    <div className={styles.container}>
      {isSignUpVisible ? (
            <div className = {styles.SignUpContainer}>
              <SignUp/>
            </div>) :''}
      {isSignInVisible ? (
        <div className={styles.SignUpContainer}>
          <SignIn />
        </div>
      ) : (
        ""
      )}
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
            <button onClick={showSignIn} className={styles.SignIn}> Sign In </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
