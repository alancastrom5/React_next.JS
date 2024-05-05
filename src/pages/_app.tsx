import "@/styles/globals.css";
import '../pages/basicos/css/integracao1.css'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
