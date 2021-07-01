import PropTypes from 'prop-types';
import Page from '../components/Page';

const MainComponent = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MainComponent;
