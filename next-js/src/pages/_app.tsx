import { AppProps } from "next/app";
import "./bootstrap-icons.css";
import "./bootstrap.min.css";
import "./tooplate-crispy-kitchen.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
