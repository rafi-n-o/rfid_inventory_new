import Gap from "../../../atoms/Gap";

const SectionD = () => {
  return (
    <div style={styles.section}>
      <Gap height={50} />
      <div className="container">
        <div className="text-center">
          <h1 style={styles.title}>
            KEUNGGULAN{" "}
            <img
              src="assets/images/logo.png"
              className="img-fluid"
              style={styles.logo}
            />
          </h1>
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
        </div>
        <Gap height={50} />
        <div className="row">
          <div className="col-lg-4">
            <div className="card mx-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 text-center">
                    <i class="fas fa-info fa-2x"></i>
                  </div>
                  <div className="col-9">
                    <div style={styles.titleContent}>Customer Support</div>
                    <div style={styles.content}>
                      Aplikasi{" "}
                      <img
                        src="assets/images/logo.png"
                        className="img-fluid"
                        style={{ maxWidth: 100 }}
                      />{" "}
                      memberikan layanan dan fitur yang akan mendukung
                      pengelolaan bisnis anda secara optimal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mx-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 text-center">
                    <i class="fas fa-credit-card fa-2x"></i>
                  </div>
                  <div className="col-9">
                    <div style={styles.titleContent}>Payment</div>
                    <div style={styles.content}>
                      Aplikasi{" "}
                      <img
                        src="assets/images/logo.png"
                        className="img-fluid"
                        style={{ maxWidth: 100 }}
                      />{" "}
                      memberikan layanan dan fitur yang akan mendukung
                      pengelolaan bisnis anda secara optimal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mx-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 text-center">
                    <i class="fas fa-shield-alt fa-2x"></i>
                  </div>
                  <div className="col-9">
                    <div style={styles.titleContent}>Security</div>
                    <div style={styles.content}>
                      Aplikasi{" "}
                      <img
                        src="assets/images/logo.png"
                        className="img-fluid"
                        style={{ maxWidth: 100 }}
                      />{" "}
                      memberikan layanan dan fitur yang akan mendukung
                      pengelolaan bisnis anda secara optimal
                    </div>
                  </div>
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
  section: {
    backgroundColor: "#f3f3f5",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#203546",
  },
  logo: {
    maxWidth: 200,
  },
  subTitle: {
    fontSize: "20px",
    color: "#203546",
  },
  titleContent: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#203546",
  },
  content: {
    fontSize: "18px",
    color: "#203546",
  },
};

export default SectionD;
