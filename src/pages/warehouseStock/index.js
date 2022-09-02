import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWarehouses, getWarehouseStock } from "../../redux/action/warehouse";

const WarehouseStock = () => {
  const [warehouseId, setWarehouseId] = useState();
  const [productName, setProductName] = useState();
  const [warehouseName, setWarehouseName] = useState();
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouses());
  }, [dispatch]);

  const { warehouses } = useSelector((state) => state.warehouses);

  const btnSearch = (e) => {
    e.preventDefault();

    dispatch(getWarehouseStock(warehouseId));
  };

  const { warehouse_stock } = useSelector((state) => state.warehouseStock);

  let total = 0;

  warehouse_stock?.map((value, index) => {
    total += value.product.qty;
  });

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Stock / Warehouse</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Stock / Warehouse</li>
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
                <label className="text-muted">Cari</label>
                <button
                  className="btn btn-info form-control"
                  onClick={btnSearch}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Gambar</th>
                    <th>Produk</th>
                    <th>Warehouse</th>
                    <th>Qty</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {warehouse_stock?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={value.product.image}
                          className="img-fluid img-thumbnail"
                          style={{ maxHeight: 80 }}
                        />
                      </td>
                      <td>{value.product.name}</td>
                      <td>{value.warehouse.name}</td>
                      <td>{value.product.qty}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => {
                            setProductName(value.product.name);
                            setWarehouseName(value.warehouse.name);
                            setItems(value.product.items);
                          }}
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
          <div className="card-footer">
            <b>Total {total}</b>
          </div>
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
                {productName} | {warehouseName}
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
                      <th>Item</th>
                      <th>Qty</th>
                      <th>Epc</th>
                      <th>Lokasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.map((value, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {value.attribute1_value} {value.attribute2_value}{" "}
                          {value.attribute3_value}
                        </td>
                        <td>{value.qty}</td>
                        <td>
                          {value.items?.map((value, index) => (
                            <ul className="list-group" key={index}>
                              <li className="list-group-item">{value.epc}</li>
                            </ul>
                          ))}
                        </td>
                        <td>
                          {value.items?.map((value, index) => (
                            <ul className="list-group" key={index}>
                              <li className="list-group-item">
                                {value.location.name}
                              </li>
                            </ul>
                          ))}
                        </td>

                        <td></td>
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

export default WarehouseStock;
