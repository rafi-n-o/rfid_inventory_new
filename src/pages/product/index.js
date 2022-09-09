import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAttributes } from "../../redux/action/attribute";
import { getCategories } from "../../redux/action/category";
import { getMeasures } from "../../redux/action/measure";
import { convertToBase64 } from "../../redux/action/convertToBase64";
import {
  getProducts,
  storeProduct,
  updateProduct,
} from "../../redux/action/product";

const Product = () => {
  const [id, setId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [attributesId, setAttributesId] = useState([]);
  const [attribute1Id, setAttribute1Id] = useState();
  const [attribute2Id, setAttribute2Id] = useState();
  const [attribute3Id, setAttribute3Id] = useState();
  const [measureId, setMeasureId] = useState();
  const [validation, setValidation] = useState([]);
  const [filterCategoryId, setFilterCategoryId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAttributes());
    dispatch(getCategories());
    dispatch(getMeasures());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);
  const { attributes } = useSelector((state) => state.attributes);
  const { categories } = useSelector((state) => state.categories);
  const { measures } = useSelector((state) => state.measures);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const handleAttributesId = (id) => {
    if (attributesId.includes(id)) {
      attributesId.splice(attributesId.indexOf(id), 1);
    } else {
      setAttributesId([...attributesId, id]);
    }
  };

  const formProduct = (e) => {
    e.preventDefault();

    const form = {
      category_id: categoryId,
      code,
      name,
      image,
      attribute1_id: attributesId[0],
      attribute2_id: attributesId[1],
      attribute3_id: attributesId[2],
      measure_id: measureId,
    };

    storeProduct(form)
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

  const formUpdateProduct = (e) => {
    e.preventDefault();

    const form = {
      category_id: categoryId,
      code,
      name,
      image,
      attribute1_id: attribute1Id,
      attribute2_id: attribute2Id,
      attribute3_id: attribute3Id,
      measure_id: measureId,
    };

    updateProduct(id, form)
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

  const btnSearch = () => {
    dispatch(getProducts(filterCategoryId));
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Product</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Product</li>
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
            <div className="row col">
              <div className="form-group">
                <label className="text-muted">Kategori</label>
                <select
                  className="form-control"
                  onChange={(e) => setFilterCategoryId(e.target.value)}
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
                    <th>Kategori</th>
                    <th>Kode</th>
                    <th>Nama</th>
                    <th>Gambar</th>
                    <th>Atribut</th>
                    <th>Satuan</th>
                    <th>Registered</th>
                    <th>In Stock</th>
                    <th>On Transfer</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.category.name}</td>
                      <td>{value.code}</td>
                      <td>{value.name}</td>
                      <td>
                        <img
                          src={value.image}
                          className="img-fluid img-thumbnail"
                          style={{ maxHeight: 80 }}
                        />
                      </td>
                      <td>
                        {value.attribute1?.name}, {value.attribute2?.name},{" "}
                        {value.attribute3?.name}
                      </td>
                      <td>{value.measure?.name}</td>
                      <td>{value.qty_item}</td>
                      <td>{value.qty_item_in_stock}</td>
                      <td>{value.qty_item_on_transfer}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-toggle="modal"
                          data-target="#exampleModal2"
                          onClick={() => {
                            setId(value.id);
                            setCategoryId(value.category_id);
                            setCode(value.code);
                            setName(value.name);
                            setImage(null);
                            setAttribute1Id(value.attribute1_id);
                            setAttribute2Id(value.attribute2_id);
                            setAttribute3Id(value.attribute3_id);
                            setMeasureId(value.measure_id);
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
                Tambah Produk
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
            <form onSubmit={formProduct}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="text-muted">Kategori</label>
                  <select
                    className="form-control"
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    <option value="" selected>
                      Pilih Kategori
                    </option>
                    {categories?.map((value, index) => (
                      <option value={value.id}>{value.name}</option>
                    ))}
                  </select>
                  <small className="form-text text-danger">
                    {validation?.category_id}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Kode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kode Produk"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.code}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Produk"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.name}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Gambar</label>
                  <input
                    type="file"
                    className="form-control-file"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                  />
                  <small className="form-text text-danger">
                    {validation?.image}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Atribut</label>
                  {attributes?.map((value, index) => (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onClick={() => {
                          handleAttributesId(value.id);
                        }}
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        {value.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <label className="text-muted">Satuan</label>
                  <select
                    className="form-control"
                    onChange={(e) => setMeasureId(e.target.value)}
                  >
                    <option value="" selected>
                      Pilih Satuan
                    </option>
                    {measures?.map((value, index) => (
                      <option value={value.id}>{value.name}</option>
                    ))}
                  </select>
                  <small className="form-text text-danger">
                    {validation?.measure_id}
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
                Ubah Produk
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
            <form onSubmit={formUpdateProduct}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="text-muted">Kategori</label>
                  <select
                    className="form-control"
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    {categories?.map((value, index) => {
                      if (value.id === categoryId)
                        return (
                          <option value={value.id} key={index} selected>
                            {value.name}
                          </option>
                        );
                      else
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        );
                    })}
                  </select>
                  <small className="form-text text-danger">
                    {validation?.category_id}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Kode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kode Produk"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.code}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Produk"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.name}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Gambar</label>
                  <input
                    type="file"
                    className="form-control-file"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                  />
                  <small className="form-text text-danger">
                    {validation?.image}
                  </small>
                </div>
                <div className="form-group">
                  <label className="text-muted">Atribut 1</label>
                  <select
                    className="form-control"
                    onChange={(e) => setAttribute1Id(e.target.value)}
                  >
                    {attributes?.map((value, index) => {
                      if (value.id === attribute1Id)
                        return (
                          <option value={value.id} key={index} selected>
                            {value.name}
                          </option>
                        );
                      else
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label className="text-muted">Atribut 2</label>
                  <select
                    className="form-control"
                    onChange={(e) => setAttribute2Id(e.target.value)}
                  >
                    {attributes?.map((value, index) => {
                      if (value.id === attribute2Id)
                        return (
                          <option value={value.id} key={index} selected>
                            {value.name}
                          </option>
                        );
                      else
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label className="text-muted">Atribut 3</label>
                  <select
                    className="form-control"
                    onChange={(e) => setAttribute3Id(e.target.value)}
                  >
                    {attributes?.map((value, index) => {
                      if (value.id === attribute3Id)
                        return (
                          <option value={value.id} key={index} selected>
                            {value.name}
                          </option>
                        );
                      else
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label className="text-muted">Satuan</label>
                  <select
                    className="form-control"
                    onChange={(e) => setMeasureId(e.target.value)}
                  >
                    {measures?.map((value, index) => {
                      if (value.id === categoryId)
                        return (
                          <option value={value.id} key={index} selected>
                            {value.name}
                          </option>
                        );
                      else
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        );
                    })}
                  </select>
                  <small className="form-text text-danger">
                    {validation?.measure_id}
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

export default Product;
