import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAttributes, storeAttribute } from "../../redux/action/attribute";

const FormAttribute = () => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [list, setList] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAttributes());
  }, [token]);

  const { attributes } = useSelector((state) => state.attributes);

  if (attributes.length > 0) {
    navigate("/form-measure");
  }

  const formAttribute = (e) => {
    e.preventDefault();

    if (!list) {
      const form = {
        name,
        type,
      };

      storeAttribute(form)
        .then((res) => {
          toast.success(res.message);
          navigate("/form-measure");
        })
        .catch((err) => {
          if (err.message === "validation failed") {
            toast.error(err.message);
            setValidation(err.data);
          } else {
            toast.error(err.message);
          }
        });
    } else {
      const form = {
        name,
        type,
        list: JSON.stringify(list.trim().split(",")),
      };

      storeAttribute(form)
        .then((res) => {
          toast.success(res.message);
          dispatch(getAttributes());
        })
        .catch((err) => {
          if (err.message === "validation failed") {
            toast.error(err.message);
            setValidation(err.data);
          } else {
            toast.error(err.message);
          }
        });
    }
  };
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-info"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row justify-content-center">
          <div className="card">
            <div className="card-body">
              <p>Lengkapi Atribut Produk Pertama Kamu</p>
              <form onSubmit={formAttribute}>
                <div className="form-group">
                  <label className="text-muted">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Atribut"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="form-text text-danger">
                    {validation?.name}
                  </small>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  >
                    <option value="" selected>
                      Pilih Tipe
                    </option>
                    <option value={"text"}>Text</option>
                    <option value={"number"}>Number</option>
                    <option value={"date"}>Date</option>
                    <option value={"list"}>List</option>
                  </select>
                  <small className="form-text text-danger">
                    {validation?.type}
                  </small>
                </div>
                {type === "list" ? (
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ex: merah, kuning, hijau"
                      value={list}
                      onChange={(e) => setList(e.target.value)}
                    />
                    <small className="form-text text-danger">
                      {validation?.list}
                    </small>
                  </div>
                ) : null}
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

export default FormAttribute;
