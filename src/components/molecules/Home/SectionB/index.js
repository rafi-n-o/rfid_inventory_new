import Gap from "../../../atoms/Gap";

const SectionB = () => {
  return (
    <div style={styles.section}>
      <div className="container">
        <h1 className="text-center" style={styles.title}>
          FITUR{" "}
          <img
            src="assets/images/logo.png"
            className="img-fluid"
            style={styles.logo}
          />
        </h1>
        <Gap height={40} />
        <div className="row text-center">
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-tachometer-alt fa-2x"></i>
              </div>
            </div>
            <div>Dashboard</div>
          </div>
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-person-booth fa-2x"></i>
              </div>
            </div>
            <div>Inbound</div>
          </div>
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-hands-helping fa-2x"></i>
              </div>
            </div>
            <div>Outbound</div>
          </div>
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-location-arrow fa-2x"></i>
              </div>
            </div>
            <div>Relocation</div>
          </div>
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-search fa-2x"></i>
              </div>
            </div>
            <div>Searching</div>
          </div>
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-exchange-alt fa-2x"></i>
              </div>
            </div>
            <div>Transfer Antar Gudang</div>
          </div>
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-history fa-2x"></i>
              </div>
            </div>
            <div>Tracking</div>
          </div>
          <div className="col mx-4" style={styles.feature}>
            <div className="card" style={styles.cardFeature}>
              <div className="card-body">
                <i className="fas fa-print fa-2x"></i>
              </div>
            </div>
            <div>Reporting</div>
          </div>
        </div>
        <Gap height={40} />
        <div className="row">
          <div
            className="col-lg-5 align-self-center mb-4"
            style={styles.description}
          >
            <div className="mx-4">
              Inventory dengan menggunakan Sistem RFID akan mempermudah dan
              mempercepat dalam kegiatan Inventory bisnis Anda
            </div>
          </div>
          <div className="col-lg-7">
            <img src="assets/images/homeSectionB.png" className="img-fluid" />
          </div>
        </div>
      </div>
      <Gap height={50} />
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#f3f3f5",
  },
  logo: {
    maxWidth: 200,
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#203546",
  },
  feature: {
    color: "#203546",
  },
  cardFeature: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  description: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#203546",
  },
};

export default SectionB;
