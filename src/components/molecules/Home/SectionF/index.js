import Gap from "../../../atoms/Gap";
import { useNavigate } from "react-router-dom";

const SectionF = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.section} id="priceList">
      <div className="container text-center">
        <Gap height={50} />
        <h1 style={styles.title}>
          HARGA SEWA{" "}
          <img
            src="assets/images/logo.png"
            className="img-fluid"
            style={styles.logo}
          />
        </h1>
        <Gap height={25} />
        <div style={styles.subTitle}>
          Harga sewa membuat penggunaan semakin fleksibel, dapat digunakan
          secara Optimal dengan dukungan dan pengembangan mengikuti pertumbuhan
          bisnis.
        </div>
        <Gap height={50} />
        <div className="row">
          <div className="col-md-4">
            <div className="card mx-2">
              <div className="card-body">
                <div style={styles.month}>Sewa / 1 Bulan</div>
                <div style={styles.price}>
                  <s>Rp 0 -,</s>
                </div>
                <div style={styles.discount}>
                  <i>0% Diskon</i>
                </div>
                <div style={styles.total}>Rp 500.000 -,</div>
                <Gap height={50} />
                <div>
                  Harga sewa system selama 1 Bulan. Anda mendapatkan semua
                  Fasilitas yang terdapat pada aplikasi untuk mendukung bisnis
                  Anda.
                </div>
                <Gap height={25} />
                <div>
                  <button
                    className="btn btn-outline-warning btn-block"
                    style={styles.button}
                    onClick={() => {
                      navigate("/cart/service/basic");
                    }}
                  >
                    Mulai Sewa
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-default btn-block"
                    style={styles.button}
                  >
                    Konsultasi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mx-2">
              <div className="card-body">
                <div style={styles.month}>Sewa / 6 Bulan</div>
                <div style={styles.price}>
                  <s>Rp 3.000.000 -,</s>
                </div>
                <div style={styles.discount}>
                  <i>15% Diskon</i>
                </div>
                <div style={styles.total}>Rp 2.550.000 -,</div>
                <Gap height={50} />
                <div>
                  Harga sewa system selama 6 Bulan. Anda mendapatkan semua
                  Fasilitas yang terdapat pada aplikasi untuk mendukung bisnis
                  Anda.
                </div>
                <Gap height={25} />
                <div>
                  <button
                    className="btn btn-outline-warning btn-block"
                    style={styles.button}
                    onClick={() => {
                      navigate("/cart/service/basic");
                    }}
                  >
                    Mulai Sewa
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-default btn-block"
                    style={styles.button}
                  >
                    Konsultasi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mx-2">
              <div className="card-body">
                <div style={styles.month}>Sewa / 12 Bulan</div>
                <div style={styles.price}>
                  <s>Rp 4.200.000 -,</s>
                </div>
                <div style={styles.discount}>
                  <i>25% Diskon</i>
                </div>
                <div style={styles.total}>Rp 4.500.000 -,</div>
                <Gap height={50} />
                <div>
                  Harga sewa system selama 12 Bulan. Anda mendapatkan semua
                  Fasilitas yang terdapat pada aplikasi untuk mendukung bisnis
                  Anda.
                </div>
                <Gap height={25} />
                <div>
                  <button
                    className="btn btn-outline-warning btn-block"
                    style={styles.button}
                    onClick={() => {
                      navigate("/cart/service/basic");
                    }}
                  >
                    Mulai Sewa
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-default btn-block"
                    style={styles.button}
                  >
                    Konsultasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Gap height={50} />
      </div>
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
  month: {
    fontSize: "22px",
    fontWeight: 500,
    color: "#203546",
  },
  price: {
    fontSize: "28px",
    color: "#203546",
  },
  discount: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#203546",
  },
  total: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#203546",
  },
  button: {
    height: "55px",
  },
};

export default SectionF;
