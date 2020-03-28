import "../global.scss";
// import "@fortawesome/fontawesome-free/js/all.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faFacebook);

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
