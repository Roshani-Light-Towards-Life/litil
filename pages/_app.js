import '../node_modules/react-modal-video/scss/modal-video.scss';
import withApollo from "../lib/apollo";
import withRedux from "../lib/redux";
import { compose } from 'redux'
import { Provider } from 'react-redux'
import GET_NEVIGATION_BAR from '../src/graphql/query/navBar';


// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )

}

MyApp.getInitialProps = async ({ Component, ctx, apolloClient, reduxStore }) => {
    const data = await apolloClient.query({ query: GET_NEVIGATION_BAR });
    const { dispatch } = reduxStore
    dispatch({
        type: 'NAVIGATION',
        light: typeof window === 'object',
        navigationItems: data.data
    })
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ctx, apolloClient, reduxStore })
    }
    return { pageProps }
}
export default compose(withApollo, withRedux)(MyApp)