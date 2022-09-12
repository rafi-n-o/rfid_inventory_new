import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getContacts,
  storeContact,
  updateContact,
} from "../../redux/action/contact";

const Contact = () => {
  const [id, setId] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [validation, setValidation] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const { contacts } = useSelector((state) => state.contacts);

  const formContact = (e) => {
    e.preventDefault();

    const form = {
      type,
      name,
      address,
      phone,
    };

    storeContact(form)
      .then((res) => {
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

  const formUpdateContact = (e) => {
    e.preventDefault();

    const form = {
      type,
      name,
      address,
      phone,
    };

    updateContact(id, form)
      .then((res) => {
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
              <h1>Contact</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact</li>
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
                    <th>Tipe</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>No. Telp</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.type}</td>
                      <td>{value.name}</td>
                      <td>{value.address}</td>
                      <td>{value.phone}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-toggle="modal"
                          data-target="#exampleModal2"
                          onClick={() => {
                            setId(value.id);
                            setType(value.type);
                            setName(value.name);
                            setAddress(value.address);
                            setPhone(value.phone);
                          }}
                        >
                          <i class="fas fa-edit"></i>
                        </button>
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
                Tambah Kontak
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
            <form onSubmit={formContact}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="text-muted">Tipe</label>
                  <select
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="" selected>
                      Pilih Tipe
                    </option>
                    <option value="supplier">Supplier</option>
                    <option value="customer">Customer</option>
                  </select>
                  <small className="form-text text-danger">
                    {validation?.type}
                  </small>
                </div>
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

      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ubah Kontak
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
            <form onSubmit={formUpdateContact}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="text-muted">Tipe</label>
                  <select
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="supplier">Supplier</option>
                    <option value="customer">Customer</option>
                  </select>
                  <small className="form-text text-danger">
                    {validation?.type}
                  </small>
                </div>
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

export default Contact;
