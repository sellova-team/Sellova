import styles from "./login.module.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>

      <div className={styles.card}>

        {/* Logo */}

        <div className={styles.logoArea}>
          <img
            src="/logo.png"
            alt="Sellova"
            className={styles.logo}
          />

          <h1>Welcome Back</h1>

          <p>
            Sign in to continue your creative journey
          </p>
        </div>

        {/* FORM */}

        <div className={styles.form}>

          {/* EMAIL */}

          <label>Email</label>

          <div className={styles.inputBox}>

            <span className={styles.icon}>✉</span>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>


          {/* PASSWORD */}

          <label>Password</label>

          <div className={styles.inputBox}>

            <span className={styles.icon}>🔒</span>

            <input
              type="password"
              placeholder="Enter your password"
            />

            <span className={styles.eye}>
              👁
            </span>

          </div>


          {/* OPTIONS */}

          <div className={styles.options}>

            <label className={styles.remember}>

              <input type="checkbox" />

              Remember me

            </label>

            <a href="#">
              Forgot Password?
            </a>

          </div>


          {/* LOGIN */}

          <Link
            href="/workspace"
            className={styles.loginButton}
          >
           Start Sellova →
          </Link>


          {/* Divider */}

          <div className={styles.divider}>

            <span></span>

            <p>OR</p>

            <span></span>

          </div>


          {/* GOOGLE */}

          <button className={styles.googleButton}>

            <img
              src="/assets/icons/google.png"
              alt=""
            />

            Continue with Google

          </button>


          {/* Register */}

          <p className={styles.register}>

            Don't have an account?

            <Link href="/register">

              Create Account

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}
