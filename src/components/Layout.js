import { Link, Outlet } from 'react-router-dom';
import './Main.css';

const Layout = () => (
  <div className="container">
    <header className="group">
      <h1> Math Magician</h1>
      <nav className="primary_nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span className="pipe">|</span>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <span className="pipe">|</span>
            <Link to="quote">Quote</Link>
          </li>

        </ul>
      </nav>

    </header>
    <main className="content group">
      <Outlet />
    </main>

    <footer className="footer">
      <small>
        &copy;
        { new Date().getFullYear()}
         &nbsp; &nbsp;
        Math Magician. All rights reserved
      </small>

    </footer>

  </div>
);
export default Layout;
