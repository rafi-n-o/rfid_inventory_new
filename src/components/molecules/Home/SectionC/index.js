import { useNavigate } from "react-router-dom";
import Gap from "../../../atoms/Gap";

const SectionC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.section}>
      <Gap height={50} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center" style={styles.content}>
            <div className="mx-3">
              <h1 style={styles.title}>
                PERANGKAT YANG BERKUALITAS MENUNJANG SYSTEM
              </h1>
              <img
                src="assets/images/logo.png"
                className="img-fluid"
                style={styles.logo}
              />
              <Gap height={40} />
              <div style={styles.subTitle}>
                Pilihan perangkat pendukung dengan kualitas terbaik untuk
                kemudahan bisnismu
              </div>
              <Gap height={40} />
              <button
                className="btn btn-default text-white shadow rounded"
                style={styles.btnNext}
                onClick={() => navigate("/device")}
              >
                Lanjutkan
              </button>
              <Gap height={30} />
            </div>
          </div>
          <div className="col-md-6 align-self-center text-center">
            <div className="mx-3">
              <img src="assets/images/homeSectionC.png" className="img-fluid" />
              <div>*Tag RFID disesuaikan dengan Objek</div>
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
    fontSize: "34px",
    fontWeight: "bold",
    color: "#203546",
  },
  subTitle: {
    fontSize: "20px",
    color: "#203546",
  },
  btnNext: {
    backgroundColor: "#ce4912",
    fontSize: "22px",
    color: "#fff",
    width: "225px",
    height: "55px",
  },
};

export default SectionC;
