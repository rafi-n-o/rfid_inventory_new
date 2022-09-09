import { useState, version } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser, storeLogin } from "../../redux/action/user";
import { storeUserLog } from "../../redux/action/userLog";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
    };

    storeLogin(form)
      .then((res) => {
        toast.success(res.message);
        localStorage.setItem("token", res.data);
        getUser().then((res) => {
          let userAgent = navigator.userAgent;
          let browserName;

          if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = "chrome";
          } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = "firefox";
          } else if (userAgent.match(/safari/i)) {
            browserName = "safari";
          } else if (userAgent.match(/opr\//i)) {
            browserName = "opera";
          } else if (userAgent.match(/edg/i)) {
            browserName = "edge";
          } else {
            browserName = "No browser detection";
          }

          const form = {
            device: browserName,
            version,
            activity: "login",
            user_id: res.data.id,
            user_data: JSON.stringify(res.data),
          };
          storeUserLog(form).then(() => {
            navigate("/dashboard");
            window.location.reload();
          });
        });
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
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={login}>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
              <button type="submit" className="btn btn-primary btn-block">
                Masuk
              </button>
            </form>
            <Link to="/">Belum punya akun?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
