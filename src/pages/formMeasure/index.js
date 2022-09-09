import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getMeasures, storeMeasure } from "../../redux/action/measure";

const FormMeasure = () => {
  const [name, setName] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeasures());
  }, [token]);

  const { measures } = useSelector((state) => state.measures);

  if (measures.length > 0) {
    navigate("/form-product");
  }

  const formMeasure = (e) => {
    e.preventDefault();

    const form = {
      name,
    };

    storeMeasure(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/form-product");
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
              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row justify-content-center">
          <div className="card">
            <div className="card-body">
              <p>Lengkapi Satuan Produk Pertama Kamu</p>
              <form onSubmit={formMeasure}>
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Satuan"
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

export default FormMeasure;
