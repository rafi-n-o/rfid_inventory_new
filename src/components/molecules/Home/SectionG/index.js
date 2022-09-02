import Gap from "../../../atoms/Gap";

const SectionG = () => {
  return (
    <>
      <Gap height={50} />
      <div className="container text-center">
        <h1 style={styles.title}>PARTNER KAMI</h1>
      </div>
      <Gap height={50} />
    </>
  );
};

const styles = {
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#203546",
  },
};

export default SectionG;
