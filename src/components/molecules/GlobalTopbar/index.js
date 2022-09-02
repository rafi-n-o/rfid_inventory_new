import Gap from "../../atoms/Gap";

const GlobalTopbar = () => {
  return (
    <div style={styles.topbar}>
      <div className="container">
        <Gap height={10} />
        <i class="fas fa-phone"></i> Hubungi Kami : Phone.(022) 7317077 |{" "}
        <i class="fab fa-whatsapp"></i> WhatsApp : +62 813 2330 5239
      </div>
    </div>
  );
};

const styles = {
  topbar: {
    fontSize: "14px",
    color: "#203546",
  },
};

export default GlobalTopbar;
