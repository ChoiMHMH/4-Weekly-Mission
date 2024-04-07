import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Link href="/folder">
        <h1
          style={{
            display: "inline-block",
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          folder
        </h1>
      </Link>
      <Link href="/shared">
        <h1
          style={{
            display: "inline-block",
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          shared
        </h1>
      </Link>
      <Link href="/signin">
        <h1
          style={{
            display: "inline-block",
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          signin
        </h1>
      </Link>

      <main></main>
    </>
  );
}
