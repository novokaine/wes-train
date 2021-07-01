import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  background: red;
  font-size: 4rem;
  margin: 4rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem;
    text-transform: uppercase;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black);
  }
`;

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <Logo>
        <Link href="/">Sick fits</Link>
      </Logo>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <Nav />
  </HeaderStyles>
);
export default Header;
