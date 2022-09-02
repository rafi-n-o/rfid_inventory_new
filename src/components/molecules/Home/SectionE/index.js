import Gap from "../../../atoms/Gap";

const SectionE = () => {
  return (
    <div>
      <Gap height={50} />
      <div className="container text-center">
        <h1 style={styles.title}>SEKTOR BISNIS YANG COCOK MENGGUNAKAN</h1>
        <img
          src="assets/images/logo.png"
          className="img-fluid"
          style={styles.logo}
        />
        <Gap height={25} />
        <div style={styles.subTitle}>
          Aplikasi{" "}
          <img
            src="assets/images/logo.png"
            className="img-fluid"
            style={{ maxWidth: 100 }}
          />{" "}
          memberikan layanan dan fitur yang akan mendukung pengelolaan bisnis
          anda secara optimal
        </div>
        <Gap height={50} />
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 px-3 py-2">
            <div className="card col-12">
              <div className="card-body">
                <div style={styles.sectorTitle}>
                  <i class="fas fa-shopping-bag fa-2x"></i> Retail
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 px-3 py-2">
            <div className="card col-12">
              <div className="card-body">
                <div style={styles.sectorTitle}>
                  <i class="fas fa-tshirt fa-2x"></i> Fashion
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 px-3 py-2">
            <div className="card col-12">
              <div className="card-body">
                <div style={styles.sectorTitle}>
                  <i class="fas fa-book fa-2x"></i> Document
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 px-3 py-2">
            <div className="card col-12">
              <div className="card-body">
                <div style={styles.sectorTitle}>
                  <i class="fas fa-book fa-2x"></i> Library
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gap height={50} />
    </div>
  );
};

const styles = {
  logo: {
    maxWidth: 200,
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#203546",
  },
  subTitle: {
    fontSize: "20px",
    color: "#203546",
  },
  sectorTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#203546",
  },
};

export default SectionE;
