const { default: Link } = require('next/link');

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark fixed-top border-0 shadow-sm">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">NextJS JWT</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link">Auth</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link btn btn-primary btn-sm text-white shadow border-0 me-3">
                    Register
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link btn btn-success btn-sm text-white shadow border-0">
                    Login
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
