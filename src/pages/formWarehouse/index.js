import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../../redux/action/user";
import { storeWarehouse } from "../../redux/action/warehouse";
import Gap from "../../components/atoms/Gap";

const FormWarehouse = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    getUser().then((res) => {
      if (res.data?.company?.warehouses.length > 0) {
        navigate("/form-category");
      }
    });
  }, [token]);

  const formWarehouse = (e) => {
    e.preventDefault();

    const form = {
      name,
      address,
      phone,
    };

    storeWarehouse(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/form-category");
      })
      .catch((err) => {
        if (err.message === "validation failed") {
          toast.error(err.message);
          setValidation(err.data);
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              20%
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row justify-content-center">
          <div className="card">
            <div className="card-body">
              <p>Lengkapi Warehouse Pertama Kamu</p>
              <form onSubmit={formWarehouse}>
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Warehouse"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.name}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alamat"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.address}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">No. Telp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="No. Telp"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.phone}
                  </small>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormWarehouse;
