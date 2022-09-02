import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../redux/action/user";
import { toast } from "react-toastify";
import { storeWarehouse } from "../../redux/action/warehouse";

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((res) => {
        setWarehouses(res.data.company.warehouses);
      })
      .catch((err) => {
        navigate("/login");
        toast.error("silahkan login");
        localStorage.removeItem("token");
      });
  }, []);

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [validation, setValidation] = useState([]);

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
        window.location.reload();
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
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Warehouse</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Warehouse</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <button
              type="button"
              className="btn btn-tool"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fas fa-plus"></i>
            </button>

            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus"></i>
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Warehouse</th>
                    <th>Alamat</th>
                    <th>No. Telp</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {warehouses.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.name}</td>
                      <td>{value.address}</td>
                      <td>{value.phone}</td>
                      <td>
                        <Link
                          to={`/warehouses/${value.id}`}
                          className="btn btn-secondary"
                        >
                          Lokasi
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </section>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tambah Warehouse
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={formWarehouse}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama"
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
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warehouse;
