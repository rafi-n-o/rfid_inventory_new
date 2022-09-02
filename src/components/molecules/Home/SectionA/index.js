import { Link, useNavigate } from "react-router-dom";
import Gap from "../../../atoms/Gap";

const SectionA = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.section}>
      <div className="container text-center">
        <Gap height={30} />
        <h1 style={styles.title}>
          ATUR DAN KELOLA INVENTORI BISNIS ANDA DENGAN SISTEM RFID
        </h1>
        <img
          src="assets/images/logo.png"
          className="img-fluid"
          style={styles.logo}
        />
        <Gap height={20} />
        <div style={styles.subTitle}>
          Inventory dengan menggunakan Sistem RFID akan mempermudah dan
          mempercepat dalam kegiatan Inventory bisnis Anda
        </div>
        <Gap height={20} />
        <button
          className="btn btn-default shadow rounded mx-2 mb-2 text-white"
          style={styles.btnSubscribe}
          onClick={() => navigate("/cart/service/basic")}
        >
          Mulai Sewa
        </button>
        <button
          className="btn btn-default shadow rounded mx-2 mb-2"
          style={styles.btnContact}
          onClick={() => alert("kontak")}
        >
          Konsultasi
        </button>
        <Gap height={25} />
        <div className="row justify-content-center">
          <div className="col-10">
            <img src="assets/images/homeSectionA.png" className="img-fluid" />
          </div>
        </div>
        <Gap height={30} />
      </div>
    </div>
  );
};

const styles = {
  section: {
    background: "linear-gradient(#fff 0%, #fff 80%, #f3f3f5 0%, #f3f3f5 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    maxWidth: 200,
  },
  title: {
    fontSize: "44px",
    fontWeight: "bold",
    color: "#203546",
  },
  subTitle: {
    fontSize: "20px",
    color: "#203546",
  },
  btnSubscribe: {
    backgroundColor: "#ce4912",
    fontSize: "22px",
    color: "#fff",
    width: "225px",
    height: "55px",
  },
  btnContact: {
    fontSize: "22px",
    color: "#203546",
    width: "200px",
    height: "55px",
  },
};

export default SectionA;
