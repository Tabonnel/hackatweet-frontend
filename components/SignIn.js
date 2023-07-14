import styles from "../styles/SignIn.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { useRouter } from 'next/router';

function SignIn() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const router = useRouter();

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
        dispatch(login({ username: signInUsername, token: data.token }));
      }
        if (user.token) {
          router.push('/home')
        }
      });
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.logoSignInContainer}>
        <Image
          className={styles.smallLogo}
          src="/logo_twitter.png"
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <p className={styles.signInTitles}> Connect to Hackatweet</p>
      <div className={styles.btnSignInContainer}>
        <input
          className={styles.inputSignIn}
          placeholder="Username"
          type="text"
          onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername}
        />
        <input
          className={styles.inputSignIn}
          placeholder="Password"
          type="password"
          onChange={(e) => setSignInPassword(e.target.value)}
          value={signInPassword}
        />
        <button className={styles.btntSignIn} onClick={() => handleConnection()}>
          Sign In{" "}
        </button>
      </div>
    </div>
  );
}

export default SignIn;
