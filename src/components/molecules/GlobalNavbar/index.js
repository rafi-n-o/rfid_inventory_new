import { Link } from "react-router-dom";

const GlobalNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container">
        <Link to="/" class="navbar-brand">
          <img
            src="assets/images/logoNav.png"
            className="img-fluid"
            style={styles.logo}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#priceList" className="nav-link" style={styles.link}>
                Harga Sewa
              </a>
            </li>
            <li class="nav-item">
              <Link to="/device" className="nav-link" style={styles.link}>
                Perangkat
              </Link>
            </li>
            <li class="nav-item">
              <a href="#" className="nav-link" style={styles.link}>
                Customer Service
              </a>
            </li>
          </ul>
        </div>
        <Link
          to="/login"
          className="btn btn-outline-warning"
          style={styles.btnLogin}
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  logo: {
    maxWidth: 150,
  },
  link: {
    fontWeight: 500,
    color: "#203546",
  },
  btnLogin: {
    width: "125px",
  },
};

export default GlobalNavbar;
