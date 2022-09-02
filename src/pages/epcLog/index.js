import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/action/category";
import { getItems } from "../../redux/action/item";
import { getProducts } from "../../redux/action/product";
import { getWarehouses } from "../../redux/action/warehouse";
import { getEpcLogs } from "../../redux/action/epcLog";

const EpcLog = () => {
  const [warehouseId, setWarehouseId] = useState();
  const [epc, setEpc] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouses());
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const { warehouses } = useSelector((state) => state.warehouses);
  const { items } = useSelector((state) => state.items);
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const { epc_logs } = useSelector((state) => state.epcLogs);

  const btnSearch = () => {
    dispatch(getEpcLogs(epc));
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Epc Logs</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Epc Logs</li>
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
                <label className="text-muted">Kategori</label>
                <select
                  className="form-control"
                  onChange={(e) => dispatch(getProducts(e.target.value))}
                >
                  <option value="" selected>
                    Pilih Kategori
                  </option>
                  {categories?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="text-muted">Produk</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    dispatch(getItems(warehouseId, e.target.value));
                  }}
                >
                  <option value="" selected>
                    Pilih Produk
                  </option>
                  {products?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="text-muted">Item</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setEpc(e.target.value);
                  }}
                >
                  <option value="" selected>
                    Pilih Item
                  </option>
                  {items?.map((value, index) => (
                    <option value={value.epc} key={index}>
                      {value.epc} | {value.attribute1_value}{" "}
                      {value.attribute2_value} {value.attribute3_value}
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
                    <th>At</th>
                    <th>Epc</th>
                    <th>Aktifitas</th>
                    <th>Note</th>
                    <th>Ref</th>
                    <th>User</th>
                  </tr>
                </thead>
                <tbody>
                  {epc_logs?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.at}</td>
                      <td>{value.epc}</td>
                      <td>{value.activity}</td>
                      <td>{value.note}</td>
                      <td>{value.ref}</td>
                      <td>{value.user_data.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </section>
    </>
  );
};

export default EpcLog;
