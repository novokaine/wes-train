import Proptypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <p>Here is the page component</p>
    {children}
  </div>
);

Page.propTypes = {
  children: Proptypes.any,
};

export default Page;
