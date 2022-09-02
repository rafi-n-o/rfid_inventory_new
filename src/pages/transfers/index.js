import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWarehouses } from "../../redux/action/warehouse";
import {
  getTransferDatas,
  getTransfers,
  printExcel,
  printPdf,
} from "../../redux/action/transfer";

const Transfers = () => {
  const [originId, setOriginId] = useState();
  const [destinationId, setDestinationId] = useState();
  const [epcList, setEpcList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouses());
    dispatch(getTransfers());
  }, [dispatch]);

  const { warehouses } = useSelector((state) => state.warehouses);

  const btnSearch = (e) => {
    e.preventDefault();

    dispatch(getTransfers(originId, destinationId));
  };

  const btnPdf = (e) => {
    e.preventDefault();

    dispatch(printPdf(originId, destinationId));
  };

  const btnExcel = (e) => {
    e.preventDefault();

    dispatch(printExcel(originId, destinationId));
  };

  const { transfers } = useSelector((state) => state.transfers);
  const { transfer_datas } = useSelector((state) => state.transferDatas);

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Transfers</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Transfers</li>
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
                <label className="text-muted">Origin</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setOriginId(e.target.value);
                  }}
                >
                  <option value="" selected>
                    Pilih Origin
                  </option>
                  {warehouses?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="text-muted">Destination</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setDestinationId(e.target.value);
                  }}
                >
                  <option value="" selected>
                    Pilih Destination
                  </option>
                  {warehouses?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
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
                    <th>No. Receipt</th>
                    <th>At</th>
                    <th>From</th>
                    <th>Origin</th>
                    <th>To</th>
                    <th>Destination</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {transfers?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.receipt_number}</td>
                      <td>{value.transfer_at}</td>
                      <td>{value.from_data?.name}</td>
                      <td>{value.origin_data.name}</td>
                      <td>{value.to_data?.name}</td>
                      <td>{value.destination_data.name}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => dispatch(getTransferDatas(value.id))}
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
                Data Transfer
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
                    {transfer_datas?.map((value, index) => (
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

export default Transfers;
