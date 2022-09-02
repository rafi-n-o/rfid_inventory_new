import { Link } from "react-router-dom";

const Sidebar = () => {
  const btnLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/dashboard" className="brand-link">
        <img
          src="assets/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">SINTAR</span>
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/items" className="nav-link">
                <i className="nav-icon fas fa-folder"></i>
                <p>Item</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="nav-icon fas fa-cubes"></i>
                <p>
                  Stok
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/stock/warehouses" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Warehouse</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/stock/products" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Produk</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-exchange-alt"></i>
                <p>
                  Transaksi / Report
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/mutations" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Mutasi</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/transfers" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Transfer</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-history"></i>
                <p>
                  Log
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/log/epc" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Epc</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/log/user" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>User</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-cogs"></i>
                <p>
                  Setup
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Produk</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/attributes" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Atribut</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/categories" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Kategori</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/warehouses" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Warehouse / Lokasi</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>
                  User
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/my-profile" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>My Profile</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Kontak</p>
                  </Link>
                </li>
              </ul>
              <li className="nav-item">
                <button
                  className="btn btn-danger nav-link text-light"
                  onClick={btnLogout}
                >
                  Logout
                </button>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
