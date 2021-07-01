import Proptypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offwhite: #ededed;
    --maxWidth: 1000px;
    --box-shadow: 0 12px 24px 0 rgba(0,0,0,0.9);
    box-sizing: border-box;

  }

  *, *:before, *:after{
    box-sizing: inherit;
  }

  body{
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
    &:hover{
      text-decoration: underline;
    }
  }

  button{
    font-family: 'radnika_next'
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  padding: 2rem;
`;

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <InnerStyles>{children}</InnerStyles>
  </div>
);

Page.propTypes = {
  children: Proptypes.any,
};

export default Page;
