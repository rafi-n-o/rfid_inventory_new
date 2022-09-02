import { useEffect, useState } from "react";
import { getUser, uploadImageUser } from "../../redux/action/user";
import { uploadImageCompany } from "../../redux/action/company";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { convertToBase64 } from "../../redux/action/convertToBase64";
import { getInvoices } from "../../redux/action/invoice";

const MyProfile = () => {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [company, setCompany] = useState({});
  const [warehouses, setWarehouses] = useState([]);
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then((res) => {
        setImage(res.data.image);
        setName(res.data.name);
        setEmail(res.data.email);
        setRole(res.data.role);
        setCompany(res.data.company);
        setWarehouses(res.data.company.warehouses);
        dispatch(getInvoices(res.data.email));
      })
      .catch((err) => {
        navigate("/login");
        toast.error("silahkan login");
        localStorage.removeItem("token");
      });
  }, []);

  const { invoices } = useSelector((state) => state.invoices);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const handleUploadImageUser = (e) => {
    e.preventDefault();

    const form = {
      image,
    };

    uploadImageUser(form)
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

  const handleUploadImageCompany = (e) => {
    e.preventDefault();

    const form = {
      image,
    };

    uploadImageCompany(form)
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

  return (
    <>
      <section class="content-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <h1>My Profile</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">My Profile</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="card">
          <div class="card-header">
            {/* <h3 class="card-title">Title</h3> */}

            <div class="card-tools">
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
            <h5>Profile</h5>
            <img
              src={image}
              className="img-fluid img-thumbnail mr-2"
              style={{ maxHeight: 80 }}
            />
            <button
              type="button"
              className="btn btn-sm btn-info"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Upload Image
            </button>
            <table>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>{role}</td>
              </tr>
            </table>
            <hr />
            <h5>Company</h5>
            <img
              src={company.image}
              className="img-fluid img-thumbnail mr-2"
              style={{ maxHeight: 80 }}
            />
            <button
              type="button"
              className="btn btn-sm btn-info"
              data-toggle="modal"
              data-target="#exampleModal2"
            >
              Upload Image
            </button>
            <table>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>{company.name}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>:</td>
                <td>{company.address}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>{company.phone}</td>
              </tr>
            </table>
            <hr />
            <h5>Warehouses</h5>
            <div className="row">
              {warehouses.map((value, index) => (
                <div className="col-lg-3">
                  <Link
                    to={`/warehouses/${value.id}`}
                    className="card"
                    key={index}
                  >
                    <div className="card-body">
                      <h5>{value.name}</h5>
                      <div>{value.address}</div>
                      <div>{value.phone}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <hr />
            <h5>Invoices</h5>
            <div className="row">
              {invoices?.map((value, index) => (
                <div className="col-lg-3" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <div>{value.receipt_number}</div>
                      <div>Active At {value.at}</div>
                      <div>Expired At {value.expired_at}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="card-footer">Footer</div>
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
                Upload Gambar Profile
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
            <form onSubmit={handleUploadImageUser}>
              <div className="modal-body">
                <div className="form-group">
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
                Upload Gambar Company
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
            <form onSubmit={handleUploadImageCompany}>
              <div className="modal-body">
                <div className="form-group">
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

export default MyProfile;
