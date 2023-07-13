import styles from '../styles/Login.module.css';
import Image from 'next/image';

function Login() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.LogoContainer}>
          <Image src='/logo_twitter.png' alt='logo' width={350} height={220} />
          </div>

        </div>
        <div className={styles.rightContent}>
          <div className ={styles.loginContainer}>
            <div className={styles.LogoContainer}>
            <Image src='/logo_twitter.png' alt='logo' width={150} height={80} />
          </div>

          </div>

        </div>
       
      </div>
    );
  }
  
  export default Login;