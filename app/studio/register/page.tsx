"use client";

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import styles from "./register.module.css";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
  return (
    <main className={styles.container}>

      <div className={styles.registerBox}>

        {/* Logo */}
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={240}
            height={130}
            className={styles.logo}
          />
        </div>

        {/* Title */}

        <h1 className={styles.title}>
          Create Your Sellova Account
        </h1>

        <p className={styles.subtitle}>
          Join Sellova and create amazing AI advertising content.
        </p>

        {/* Full Name */}

        <label className={styles.label}>
          Full Name
        </label>

        <input
          className={styles.input}
          type="text"
          placeholder="Enter your full name"
        />

        {/* Email */}

        <label className={styles.label}>
          Email Address
        </label>

        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
        />

        {/* Password */}

        <label className={styles.label}>
          Password
        </label>

        <input
          className={styles.input}
          type="password"
          placeholder="Create password"
        />

        {/* Confirm Password */}

        <label className={styles.label}>
          Confirm Password
        </label>

        <input
          className={styles.input}
          type="password"
          placeholder="Confirm password"
        />

        {/* Terms */}

        <label className={styles.checkBox}>

          <input type="checkbox" />

          <span>
            I agree to the{" "}
            <Link href="#">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#">
              Privacy Policy
            </Link>
          </span>

        </label>

        {/* Create Button */}

        <button
  className={styles.createButton}
  onClick={() => router.push("/studio")}
>
  Create Account →
</button>

        {/* OR */}

        <div className={styles.or}>

          <span></span>

          OR

          <span></span>

        </div>

        {/* Google */}

        <button
          className={styles.google}
          onClick={() => alert("Google Register")}
        >

          <FcGoogle className={styles.googleIcon} />

          Continue with Google

        </button>

        {/* Login */}

        <p className={styles.loginText}>

          Already have an account?

          <Link href="/login">
            Sign In
          </Link>

        </p>

      </div>

    </main>
  );
}
