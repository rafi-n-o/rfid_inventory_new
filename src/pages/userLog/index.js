import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/action/user";
import { getUserLogs } from "../../redux/action/userLog";

const UserLog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser().then((res) => {
      dispatch(getUserLogs(res.data.id));
    });
  }, []);

  const { user_logs } = useSelector((state) => state.userLogs);

  const [activity, setActivity] = useState();
  const [startAt, setStartAt] = useState();
  const [endAt, setEndAt] = useState();

  const btnSearch = (e) => {
    e.preventDefault();

    getUser().then((res) => {
      dispatch(getUserLogs(res.data.id, activity, startAt, endAt));
    });
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>User Logs</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">User Logs</li>
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
                <label className="text-muted">Aktifitas</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setActivity(e.target.value);
                  }}
                >
                  <option value="" selected>
                    Pilih Aktifitas
                  </option>
                  <option value="register">Register</option>
                  <option value="login">Login</option>
                  <option value="tag-registration">Tag Registration</option>
                  <option value="tag-registration">Inbound</option>
                  <option value="tag-registration">Relokasi</option>
                  <option value="tag-registration">Transfer</option>
                  <option value="tag-registration">Outbound</option>
                </select>
              </div>
              <div className="form-group">
                <label className="text-muted">Start At</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  onChange={(e) => {
                    setStartAt(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label className="text-muted">End At</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  onChange={(e) => {
                    setEndAt(e.target.value);
                  }}
                />
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
                    <th>Browser</th>
                    <th>Version</th>
                    <th>Aktifitas</th>
                  </tr>
                </thead>
                <tbody>
                  {user_logs?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.at}</td>
                      <td>{value.device}</td>
                      <td>{value.version}</td>
                      <td>{value.activity}</td>
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

export default UserLog;
