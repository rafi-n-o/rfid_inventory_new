import { useEffect } from "react";
import { Link } from "react-router-dom";
import Gap from "../../atoms/Gap";

const Sidebar = () => {
  useEffect(() => {
    const trees = window.$('[data-widget = "treeview"]');
    trees.Treeview("init");
  }, []);

  const btnLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <aside className="main-sidebar sidebar-light-primary elevation-4">
      <div className="brand-link text-center">
        <img src="assets/images/logoNav.png" className="img-fluid w-50" />
      </div>
      <hr />
      <div className="sidebar">
        <nav>
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
                  <Link to="/measures" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Satuan</p>
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
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={btnLogout}
                style={{ cursor: "pointer" }}
              >
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </li>
            <Gap height={30} />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
