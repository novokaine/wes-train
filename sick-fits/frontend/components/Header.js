import Link from 'next/link';

const Header = () => (
  <header>
    <div className="bar">
      Sick Fits
      <Link href="/">Home</Link>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
  </header>
);
export default Header;
