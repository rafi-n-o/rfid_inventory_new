import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWarehouses } from "../../redux/action/warehouse";
import {
  getMutationDatas,
  getMutations,
  printExcel,
  printPdf,
} from "../../redux/action/mutation";

const Mutations = () => {
  const [warehouseId, setWarehouseId] = useState();
  const [type, setType] = useState();
  const [startAt, setStartAt] = useState();
  const [endAt, setEndAt] = useState();
  const [epcList, setEpcList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouses());
    dispatch(getMutations());
  }, [dispatch]);

  const { warehouses } = useSelector((state) => state.warehouses);

  const btnSearch = (e) => {
    e.preventDefault();

    dispatch(getMutations(warehouseId, type, startAt, endAt));
  };

  const btnPdf = (e) => {
    e.preventDefault();

    dispatch(printPdf(warehouseId, type, startAt, endAt));
  };

  const btnExcel = (e) => {
    e.preventDefault();

    dispatch(printExcel(warehouseId, type, startAt, endAt));
  };

  const { mutations } = useSelector((state) => state.mutations);
  const { mutation_datas } = useSelector((state) => state.mutationDatas);

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Mutations</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Mutations</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            {/* <h3 className="card-title">Title</h3> */}

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
            <div className="row col">
              <div className="form-group">
                <label className="text-muted">Warehouse</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setWarehouseId(e.target.value);
                  }}
                >
                  <option value="" selected>
                    Pilih Warehouse
                  </option>
                  {warehouses?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="text-muted">Tipe</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="" selected>
                    Pilih Tipe
                  </option>
                  <option value={`inbound`}>Inbound</option>
                  <option value={`outbound`}>Outbound</option>
                </select>
              </div>
              <div className="form-group">
                <label className="text-muted">Start At</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  onChange={(e) => {
                    setStartAt(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label className="text-muted">End At</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  onChange={(e) => {
                    setEndAt(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label className="text-muted">Cari</label>
                <button
                  className="btn btn-info form-control"
                  onClick={btnSearch}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="form-group">
                <label className="text-muted">PDF</label>
                <button
                  className="btn btn-danger form-control"
                  onClick={btnPdf}
                >
                  <i className="fas fa-file-pdf"></i>
                </button>
              </div>
              <div className="form-group">
                <label className="text-muted">Excel</label>
                <button
                  className="btn btn-success form-control"
                  onClick={btnExcel}
                >
                  <i className="fas fa-file-excel"></i>
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Warehouse</th>
                    <th>No. Receipt</th>
                    <th>At</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {mutations?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.warehouse_data.name}</td>
                      <td>{value.receipt_number}</td>
                      <td>{value.at}</td>
                      <td>
                        {value.from_data.name}{" "}
                        {value.type === "outbound" ? (
                          <span className="badge badge-danger">Outbound</span>
                        ) : null}
                      </td>
                      <td>
                        {value.to_data.name}{" "}
                        {value.type === "inbound" ? (
                          <span className="badge badge-success">Inbound</span>
                        ) : null}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => dispatch(getMutationDatas(value.id))}
                        >
                          <i className="fas fa-eye"></i>
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
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Data Mutasi
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
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Gambar</th>
                      <th>Nama Item</th>
                      <th>Qty</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mutation_datas?.map((value, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={value.item_data?.product?.image}
                            className="img-fluid img-thumbnail"
                            style={{ maxHeight: 80 }}
                          />
                        </td>
                        <td>
                          {value.item_data?.product?.name}{" "}
                          {value.item_data?.attribute1_value}{" "}
                          {value.item_data?.attribute2_value}{" "}
                          {value.item_data?.attribute3_value}
                        </td>
                        <td>{value.qty}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-info"
                            data-toggle="modal"
                            data-target="#exampleModal2"
                            onClick={() => setEpcList(value.epc_list)}
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Kembali
              </button>
            </div>
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
                Epc List
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
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Epc</th>
                    </tr>
                  </thead>
                  <tbody>
                    {epcList?.map((value, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mutations;
