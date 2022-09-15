const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-comments"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item">
              <div class="media">
                <div class="media-body">
                  <h3 class="dropdown-item-title">Type</h3>
                  <p class="text-sm">Message...</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> X Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">
              See All Messages
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="fullscreen"
            role="button"
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
