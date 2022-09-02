import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Gap from "../../components/atoms/Gap";
import { getDevices } from "../../redux/action/device";
import { storeOrder } from "../../redux/action/order";
import { getServices } from "../../redux/action/service";

const Cart = () => {
  const { category } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices(category));
    dispatch(getDevices());
  }, [category]);

  const { services } = useSelector((state) => state.services);
  const { devices } = useSelector((state) => state.devices);

  const [serviceData, setServiceData] = useState();
  const [cart, setCart] = useState([]);

  const [email, setEmail] = useState();
  const [paymentType, setPaymentType] = useState();
  const [validation, setValidation] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  const handleOrder = () => {
    const form = {
      service_data: JSON.stringify(serviceData),
      cart: JSON.stringify(cart),
      email: email,
      payment_type: paymentType,
      checkbox,
    };

    storeOrder(form)
      .then((res) => toast.success(res.message))
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
    <div style={styles.page}>
      <div className="container">
        <Gap height={30} />
        <div style={{ fontSize: 28 }}>
          Selangkah lagi! Lengkapi detail pembelian Anda
        </div>
        <Gap height={20} />
        <div style={{ fontSize: 18 }}>1. Paket Yang dipilih</div>
        <Gap height={10} />
        <div className="row">
          {services.map((value, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="card">
                <div className="card-body">
                  <div style={{ fontWeight: "bold" }}>
                    <input
                      type="radio"
                      name="service"
                      onChange={() => {
                        setServiceData({
                          category: value.category,
                          month: value.month,
                          price: value.price,
                          discount: value.discount,
                          total: value.total,
                        });
                      }}
                    />{" "}
                    Sewa / {value.month} Bulan
                  </div>
                  <s style={{ fontSize: "22px" }}>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(value.price)}
                  </s>
                  <div style={{ fontSize: "18px" }}>
                    {value.discount}% Diskon
                  </div>
                  <div style={{ fontSize: "26px", fontWeight: 500 }}>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(value.total)}
                  </div>
                  <Gap height={50} />
                  <div style={{ color: "#f36b1c" }}>
                    <i className="fa-2x fab fa-whatsapp"></i> Konsultasi dengan
                    Kami
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <small class="form-text text-danger">{validation?.service_data}</small>
        <hr />
        <div style={{ fontSize: 18 }}>2. Lengkapi Perangkat</div>
        <Gap height={10} />
        <div style={{ fontWeight: "500", fontSize: "18px" }}>Handheld</div>
        <div className="row">
          {devices.map((value, index) => {
            if (value.type === "handheld") {
              return (
                <div className="col-lg-6 col-md-9" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <img
                          src={value.image}
                          className="img-fluid"
                          style={{ maxHeight: 80 }}
                        />
                        <div
                          className="ml-2"
                          style={{ fontSize: "20px", fontWeight: 500 }}
                        >
                          {value.name}
                        </div>
                        <div
                          className="ml-auto"
                          style={{
                            color: "#f36b1c",
                            fontSize: "22px",
                            fontWeight: 500,
                          }}
                        >
                          {Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(value.price)}
                        </div>
                      </div>
                      <button
                        className="btn btn-default text-white float-right"
                        style={{ backgroundColor: "#f36b1c" }}
                        onClick={() => {
                          setCart((cart) => [...cart, value]);
                        }}
                      >
                        <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div style={{ fontWeight: "500", fontSize: "18px" }}>Tag</div>
        <div className="row">
          {devices.map((value, index) => {
            if (value.type === "tag") {
              return (
                <div className="col-lg-6 col-md-9" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <img
                          src={value.image}
                          className="img-fluid"
                          style={{ maxHeight: 80 }}
                        />
                        <div
                          className="ml-2"
                          style={{ fontSize: "20px", fontWeight: 500 }}
                        >
                          {value.name}
                        </div>
                        <div
                          className="ml-auto"
                          style={{
                            color: "#f36b1c",
                            fontSize: "22px",
                            fontWeight: 500,
                          }}
                        >
                          {Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(value.price)}
                        </div>
                      </div>
                      <button
                        className="btn btn-default text-white float-right"
                        style={{ backgroundColor: "#f36b1c" }}
                        onClick={() => {
                          setCart((cart) => [...cart, value]);
                        }}
                      >
                        <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div style={{ fontWeight: "500", fontSize: "18px" }}>
          Antena (Opsional)
        </div>
        <div className="row">
          {devices.map((value, index) => {
            if (value.type === "antenna") {
              return (
                <div className="col-lg-6 col-md-9" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <img
                          src={value.image}
                          className="img-fluid"
                          style={{ maxHeight: 80 }}
                        />
                        <div
                          className="ml-2"
                          style={{ fontSize: "20px", fontWeight: 500 }}
                        >
                          {value.name}
                        </div>
                        <div
                          className="ml-auto"
                          style={{
                            color: "#f36b1c",
                            fontSize: "22px",
                            fontWeight: 500,
                          }}
                        >
                          {Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(value.price)}
                        </div>
                      </div>
                      <button
                        className="btn btn-default text-white float-right"
                        style={{ backgroundColor: "#f36b1c" }}
                        onClick={() => {
                          setCart((cart) => [...cart, value]);
                        }}
                      >
                        <i class="fas fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div style={{ fontWeight: "500", fontSize: "18px" }}>Cart</div>
        <div className="card">
          <div className="card-body table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Perangkat</th>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Qty</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={value.image}
                        className="img-fluid img-thumbnail"
                        style={{ maxHeight: 50 }}
                      />
                    </td>
                    <td>{value.name}</td>
                    {value.total ? (
                      <td>
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(value.total)}
                      </td>
                    ) : (
                      <td>0</td>
                    )}
                    <td>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        onChange={(e) => {
                          const newState = cart.map((v) => {
                            if (v.id === value.id) {
                              return {
                                ...v,
                                qty: parseInt(e.target.value),
                                total: v.price * e.target.value,
                              };
                            }
                            return v;
                          });
                          setCart(newState);
                        }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          setCart([
                            ...cart.slice(0, index),
                            ...cart.slice(index + 1, cart.length),
                          ]);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div style={{ fontSize: 18 }}>3. Email for Account</div>
        <Gap height={10} />
        <div className="row">
          <div className="col-lg-4 col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <small class="form-text text-danger">{validation?.email}</small>
        <hr />
        <div style={{ fontSize: 18 }}>4. Pilih Opsi Pembayaran</div>
        <Gap height={10} />
        <div className="row">
          <div className="col-lg-4 col-md-8">
            <div className="card">
              <div className="card-body">
                <div>
                  <input
                    type="radio"
                    name="paymentType"
                    onChange={() => {
                      setPaymentType("bca");
                    }}
                  />{" "}
                  BCA 08222910xxx
                </div>
                <div>
                  <input
                    type="radio"
                    name="paymentType"
                    onChange={() => {
                      setPaymentType("bri");
                    }}
                  />{" "}
                  BRI 08112601xxx
                </div>
              </div>
            </div>
          </div>
        </div>
        <small class="form-text text-danger">{validation?.payment_type}</small>
        <hr />
        <div style={{ fontSize: 18 }}>5. Syarat & Ketentuan</div>
        <Gap height={10} />
        <div className="card">
          <div className="card-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                onChange={() => {
                  if (checkbox === true) {
                    setCheckbox(false);
                  } else {
                    setCheckbox(true);
                  }
                }}
              />
              <label class="form-check-label">Saya sudah membaca</label>
            </div>
            <button
              type="submit"
              className="btn btn-default text-white"
              onClick={handleOrder}
              style={{ backgroundColor: "#f36b1c" }}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
      <Gap height={30} />
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f3f3f5",
  },
};

export default Cart;
