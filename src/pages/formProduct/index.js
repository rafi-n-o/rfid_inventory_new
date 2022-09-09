import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAttributes } from "../../redux/action/attribute";
import { getCategories } from "../../redux/action/category";
import { convertToBase64 } from "../../redux/action/convertToBase64";
import { getMeasures } from "../../redux/action/measure";
import { getProducts, storeProduct } from "../../redux/action/product";

const FormProduct = () => {
  const [categoryId, setCategoryId] = useState();
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [attributesId, setAttributesId] = useState([]);
  const [measureId, setMeasureId] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAttributes());
    dispatch(getProducts());
    dispatch(getMeasures());
  }, [token]);

  const { categories } = useSelector((state) => state.categories);
  const { attributes } = useSelector((state) => state.attributes);
  const { products } = useSelector((state) => state.products);
  const { measures } = useSelector((state) => state.measures);

  if (products.length > 0) {
    navigate("/dashboard");
  }

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
        toast.success(res.message);
        navigate("/products");
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
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>
      </section>
      <div className="row justify-content-center">
        <div className="card">
          <div className="card-body">
            <p>Lengkapi Produk Pertama Kamu</p>
            <form onSubmit={formProduct}>
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
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
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
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onClick={() => {
                        handleAttributesId(value.id);
                      }}
                    />
                    <label className="form-check-label">{value.name}</label>
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
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
                <small className="form-text text-danger">
                  {validation?.measure_id}
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormProduct;
