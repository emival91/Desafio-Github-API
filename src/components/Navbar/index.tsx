import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>Github API</h4>
      </Link>
    </nav>
  );
}

export default Navbar;
