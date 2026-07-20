"use client";

import Image from "next/image";
import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineEye } from "react-icons/hi2";

export default function LoginPage() {
  const router = useRouter();
  return (
    <main className={styles.container}>

      <div className={styles.loginBox}>

        <div className={styles.logo}>
          Sellova
        </div>

        <h1 className={styles.title}>
          Welcom Back</h1>

        <p className={styles.subtitle}>
          Sign in to continue your creative journey
        </p>


        <label>Email</label>

        <div className={styles.inputBox}>
          <span>✉</span>
          <input 
            type="email"
            placeholder="Enter your email"
          />
        </div>


        <label>Password</label>

        <div className={styles.inputBox}>
          <Image
            src="/assets/icons/edit/login/lock.png"
            width={40}
            height={40}
            alt="lock"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <HiOutlineEye className={styles.eye} />

        </div>


        <div className={styles.options}>

          <label className={styles.remember}>
            <input type="checkbox"/>
            Remember me
          </label>

          <a>
            Forgot Password?
          </a>

        </div>


       <button
  className={styles.enter}
  onClick={() => router.push("/workspace")}
>
  Enter Sellova →
</button>

        <div className={styles.or}>
          <span></span>
          OR
          <span></span>
        </div>


       <button
  className={styles.google}
  onClick={() => alert("Google login")}
>
  <FcGoogle className={styles.googleIcon} />
  Continue with Google
</button>

        <p className={styles.signup}>
          Don’t have an account?
         
         <Link href="/register">
         Creat Account
         </Link>
        </p>

   <div className={styles.loginFooter}>
  <a href="/support">Contact Support</a>
</div>
</div>
    </main>
  );
}
