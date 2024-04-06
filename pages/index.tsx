<<<<<<< HEAD
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
=======
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
<<<<<<< HEAD
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
      <main></main>
=======
      <h1>홈페이지입니다</h1>
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
    </>
  );
}
