import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWarehouses } from "../../redux/action/warehouse";
import { getItems } from "../../redux/action/item";
import { getCategories } from "../../redux/action/category";
import { getProducts } from "../../redux/action/product";

const Item = () => {
  const [warehouseId, setWarehouseId] = useState();
  const [productId, setProductId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouses());
    dispatch(getItems());
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const { warehouses } = useSelector((state) => state.warehouses);
  const { items } = useSelector((state) => state.items);
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);

  const btnSearch = () => {
    dispatch(getItems(warehouseId, productId));
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Item</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Item</li>
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
                    setProductId(e.target.value);
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
                    <th>Kode</th>
                    <th>Produk</th>
                    <th>Warehouse | Lokasi</th>
                    <th>EPC</th>
                    <th>In Stock</th>
                    <th>On Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={value.product.image}
                          className="img-fluid img-thumbnail"
                          style={{ maxHeight: 80 }}
                        />
                      </td>
                      <td>{value.product.code}</td>
                      <td>
                        {value.product.name} {value.attribute1_value}{" "}
                        {value.attribute2_value} {value.attribute3_value}
                      </td>
                      <td>
                        {value.warehouse?.name} | {value.location?.name}
                      </td>
                      <td>{value.epc}</td>
                      <td>
                        {value.in_stock ? (
                          <i class="fas fa-check-circle text-success"></i>
                        ) : (
                          <i class="fas fa-times-circle text-danger"></i>
                        )}
                      </td>
                      <td>
                        {value.on_transfer ? (
                          <i class="fas fa-check-circle text-success"></i>
                        ) : (
                          <i class="fas fa-times-circle text-danger"></i>
                        )}
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
    </>
  );
};

export default Item;
