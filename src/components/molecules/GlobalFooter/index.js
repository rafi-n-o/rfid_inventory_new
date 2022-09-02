import Gap from "../../atoms/Gap";

const GlobalFooter = () => {
  return (
    <div style={styles.section}>
      <Gap height={50} />
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-4">
            <div className="col-10">
              <img
                src="assets/images/logoNav.png"
                className="img-fluid"
                style={styles.logo}
              />
              <Gap height={25} />
              <div>
                Inventory dengan menggunakan Sistem RFID akan mempermudah dan
                mempercepat dalam kegiatan Inventory bisnis Anda
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="col-10">
              <div style={styles.title}>Kontak</div>
              <Gap height={25} />
              <div>
                Jl. Pelajar Pejuang 45 No. 43, Bandung 40263 Phone. (022)
                7317077
                <br />
                WhatsApp : +62 813 2330 5239
                <br />
                Email :
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
    backgroundColor: "#b13a08",
  },
  title: {
    fontSize: "20px",
  },
  logo: {
    maxWidth: 150,
  },
};

export default GlobalFooter;
