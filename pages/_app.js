/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Layout from '../components/layout/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
