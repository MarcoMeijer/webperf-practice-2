import { AppProps } from "next/app";
import "./bootstrap-icons.css";
import "./bootstrap.min.css";
import "./tooplate-crispy-kitchen.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
