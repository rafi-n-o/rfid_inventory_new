import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAttributes,
  storeAttribute,
  updateAttribute,
} from "../../redux/action/attribute";
import { toast } from "react-toastify";

const Attribute = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [list, setList] = useState();
  const [validation, setValidation] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAttributes());
  }, [dispatch]);

  const { attributes } = useSelector((state) => state.attributes);

  const formAttribute = (e) => {
    e.preventDefault();

    if (type !== "list") {
      const form = {
        name,
        type,
      };

      storeAttribute(form)
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
    } else {
      const form = {
        name,
        type,
        list: JSON.stringify(list.trim().split(",")),
      };

      storeAttribute(form)
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
    }
  };

  const formUpdateAttribute = (e) => {
    e.preventDefault();

    if (type !== "list") {
      const form = {
        name,
        type,
      };

      updateAttribute(id, form)
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
    } else {
      const form = {
        name,
        type,
        list: JSON.stringify(list.trim().split(",")),
      };

      updateAttribute(id, form)
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
    }
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Attribute</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Attribute</li>
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
                    <th>Nama</th>
                    <th>Tipe</th>
                    <th>List</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {attributes?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.name}</td>
                      <td>{value.type}</td>
                      <td>{value.list}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-toggle="modal"
                          data-target="#exampleModal2"
                          onClick={() => {
                            setId(value.id);
                            setName(value.name);
                            setType(value.type);
                            setList(value.list.toString());
                          }}
                        >
                          <i className="fas fa-edit"></i>
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
                Tambah Atribut
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
            <form onSubmit={formAttribute}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Atribut"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.name}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Tipe</label>
                  <select
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  >
                    <option value="" selected>
                      Pilih Tipe
                    </option>
                    <option value={"text"}>Text</option>
                    <option value={"number"}>Number</option>
                    <option value={"date"}>Date</option>
                    <option value={"list"}>List</option>
                  </select>

                  <small className="form-text text-danger">
                    {validation?.type}
                  </small>
                </div>
                {type === "list" ? (
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ex: merah, kuning, hijau"
                      value={list}
                      onChange={(e) => setList(e.target.value)}
                    />
                    <small className="form-text text-danger">
                      {validation?.list}
                    </small>
                  </div>
                ) : null}
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
                Ubah Atribut
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
            <form onSubmit={formUpdateAttribute}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Atribut"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.name}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Tipe</label>
                  <select
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  >
                    <option value={"text"}>Text</option>
                    <option value={"number"}>Number</option>
                    <option value={"date"}>Date</option>
                    <option value={"list"}>List</option>
                  </select>

                  <small className="form-text text-danger">
                    {validation?.type}
                  </small>
                </div>
                {type === "list" ? (
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ex: merah, kuning, hijau"
                      value={list}
                      onChange={(e) => setList(e.target.value)}
                    />
                    <small className="form-text text-danger">
                      {validation?.list}
                    </small>
                  </div>
                ) : null}
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

export default Attribute;
