import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
