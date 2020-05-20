import '../node_modules/react-modal-video/scss/modal-video.scss';
import withApollo from "../lib/apollo";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default withApollo()(MyApp)