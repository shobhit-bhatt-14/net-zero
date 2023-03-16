import { Fragment } from "react";
import "@/styles/globals.css";

import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}
