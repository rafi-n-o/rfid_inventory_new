import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWarehouse } from "../../redux/action/warehouse";
import { storeLocation } from "../../redux/action/location";
import { toast } from "react-toastify";

const WarehouseDetail = () => {
  const { id } = useParams();

  const [name, setName] = useState();
  const [rootId, setRootId] = useState();
  const [validation, setValidation] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouse(id));
  }, [dispatch]);

  const { warehouse } = useSelector((state) => state.warehouse);

  const formLocation = (e) => {
    e.preventDefault();

    const form = {
      name,
      root_id: rootId,
      warehouse_id: id,
    };

    storeLocation(form)
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
              <h1>Warehouse</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Location</a>
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
            <h5>
              {warehouse.name}, {warehouse.address}, {warehouse.phone}
            </h5>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Lokasi</th>
                    <th>Path</th>
                  </tr>
                </thead>
                <tbody>
                  {warehouse?.locations?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.name}</td>
                      <td>{value.path_name}</td>
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
                Tambah Lokasi
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
            <form onSubmit={formLocation}>
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
                  <label className="text-muted">Root</label>
                  <select
                    className="form-control"
                    onChange={(e) => setRootId(e.target.value)}
                  >
                    <option value="">Pilih Root</option>
                    {warehouse.locations?.map((value, index) => (
                      <option value={value.id} key={index}>
                        {value.name}
                      </option>
                    ))}
                  </select>
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

export default WarehouseDetail;
