import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrder } from "../../redux/action/order";
import { storeRegister } from "../../redux/action/user";

const Register = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(token));
  }, [token]);

  const { order } = useSelector((state) => state.order);

  const navigate = useNavigate();

  if (order?.status !== "success") {
    navigate(`/order?token=${token}`);
  }

  const [email = order.email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyAddress, setCompanyAddress] = useState();
  const [companyPhone, setCompanyPhone] = useState();
  const [validation, setValidation] = useState([]);

  const register = (e) => {
    e.preventDefault();

    const form = {
      name,
      phone,
      email,
      password,
      company_name: companyName,
      company_address: companyAddress,
      company_phone: companyPhone,
    };

    storeRegister(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/login");
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
    <div className="row justify-content-center">
      <div className="login-box">
        <div className="login-logo">
          <b>SINTAR</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign up to create your account</p>
            <form onSubmit={register}>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <small className="text-danger">{validation?.email}</small>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <small className="text-danger">{validation?.name}</small>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="No. Telp"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone"></span>
                    </div>
                  </div>
                </div>
                <small className="text-danger">{validation?.phone}</small>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <small className="text-danger">{validation?.password}</small>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Perusahaan"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-building"></span>
                    </div>
                  </div>
                </div>
                <small className="text-danger">
                  {validation?.company_name}
                </small>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alamat Perusahaan"
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-address-card"></span>
                    </div>
                  </div>
                </div>
                <small className="text-danger">
                  {validation?.company_address}
                </small>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telp. Perusahaan"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone"></span>
                    </div>
                  </div>
                </div>
                <small className="text-danger">
                  {validation?.company_phone}
                </small>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Daftar
              </button>
            </form>
            <Link to="/login">Sudah punya akun?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
