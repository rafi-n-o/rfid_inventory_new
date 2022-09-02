import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gap from "../../components/atoms/Gap";
import { getDevices } from "../../redux/action/device";

const Device = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  const { devices } = useSelector((state) => state.devices);
  return (
    <div className="container">
      <Gap height={30} />
      <h1 className="text-center" style={styles.title}>
        Shop Device
      </h1>
      <Gap height={20} />
      <div style={{ fontWeight: "500", fontSize: "24px" }}>Handheld</div>
      <Gap height={10} />
      <div className="row">
        {devices.map((value, index) => {
          if (value.type === "handheld") {
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src={value.image}
                      className="img-fluid"
                      style={{ maxHeight: 175 }}
                    />
                  </div>
                </div>
                <div style={{ fontSize: "20px", fontWeight: 500 }}>
                  {value.name}
                </div>
                <Gap height={25} />
                <div
                  style={{
                    color: "#f36b1c",
                    fontSize: "20px",
                  }}
                >
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(value.price)}
                </div>
                <Gap height={10} />
                <button
                  className="btn btn-default text-white"
                  style={{ backgroundColor: "#f36b1c" }}
                >
                  Beli Sekarang
                </button>
              </div>
            );
          }
        })}
      </div>
      <Gap height={20} />
      <hr />
      <div style={{ fontWeight: "500", fontSize: "24px" }}>Tag</div>
      <Gap height={10} />
      <div className="row">
        {devices.map((value, index) => {
          if (value.type === "tag") {
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src={value.image}
                      className="img-fluid"
                      style={{ maxHeight: 175 }}
                    />
                  </div>
                </div>
                <div style={{ fontSize: "20px", fontWeight: 500 }}>
                  {value.name}
                </div>
                <Gap height={25} />
                <div
                  style={{
                    color: "#f36b1c",
                    fontSize: "20px",
                  }}
                >
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(value.price)}
                </div>
                <Gap height={10} />
                <button
                  className="btn btn-default text-white"
                  style={{ backgroundColor: "#f36b1c" }}
                >
                  Beli Sekarang
                </button>
              </div>
            );
          }
        })}
      </div>
      <Gap height={20} />
      <hr />
      <div style={{ fontWeight: "500", fontSize: "24px" }}>Antena</div>
      <Gap height={10} />
      <div className="row">
        {devices.map((value, index) => {
          if (value.type === "antenna") {
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src={value.image}
                      className="img-fluid"
                      style={{ maxHeight: 175 }}
                    />
                  </div>
                </div>
                <div style={{ fontSize: "20px", fontWeight: 500 }}>
                  {value.name}
                </div>
                <Gap height={25} />
                <div
                  style={{
                    color: "#f36b1c",
                    fontSize: "20px",
                  }}
                >
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(value.price)}
                </div>
                <Gap height={10} />
                <button
                  className="btn btn-default text-white"
                  style={{ backgroundColor: "#f36b1c" }}
                >
                  Beli Sekarang
                </button>
              </div>
            );
          }
        })}
      </div>
      <Gap height={30} />
    </div>
  );
};

const styles = {
  title: {
    fontSize: "44px",
    fontWeight: "bold",
    color: "#203546",
  },
};

export default Device;
