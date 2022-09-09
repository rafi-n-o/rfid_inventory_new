import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCategories, storeCategory } from "../../redux/action/category";

const FormCategory = () => {
  const [name, setName] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [token]);

  const { categories } = useSelector((state) => state.categories);

  if (categories.length > 0) {
    navigate("/form-attribute");
  }

  const formCategory = (e) => {
    e.preventDefault();

    const form = {
      name,
    };

    storeCategory(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/form-attribute");
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
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row justify-content-center">
          <div className="card">
            <div className="card-body">
              <p>Lengkapi Kategori Produk Pertama Kamu</p>
              <form onSubmit={formCategory}>
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Kategori"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.name}
                  </small>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormCategory;
