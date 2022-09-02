import Gap from "../../atoms/Gap";

const GlobalBottombar = () => {
  return (
    <div style={styles.section}>
      <div className="container">
        <div style={styles.poweredBy}>
          All rights reserved, Powered by RFID TOTAL SOLUTION
        </div>
      </div>
      <Gap height={10} />
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#b13a08",
  },
  poweredBy: {
    color: "#f36b1c",
  },
};

export default GlobalBottombar;
