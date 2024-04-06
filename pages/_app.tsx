<<<<<<< HEAD
import "@/styles/reset.css";
=======
import "../styles/global.scss";
import "../styles/reset.css";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
