import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { convertToBase64 } from "../../redux/action/convertToBase64";
import { getOrder } from "../../redux/action/order";
import { toast } from "react-toastify";
import { uploadPaymentProof } from "../../redux/action/order";

const Order = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(token));
  }, [token]);

  const { order } = useSelector((state) => state.order);

  const [image, setImage] = useState();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const upload = (e) => {
    e.preventDefault();

    const form = {
      image,
    };

    uploadPaymentProof(token, form)
      .then((res) => {
        toast.success(res.message);
        dispatch(getOrder(token));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="row justify-content-center">
      <div className="card shadow bg-white rounded">
        <div className="card-body">
          <h3>Order</h3>
          <div>{order.email}</div>
          <hr />
          <h5>Service</h5>
          <table>
            <tr>
              <td>Paket</td>
              <td>:</td>
              <td>{order.service_data?.category}</td>
            </tr>
            <tr>
              <td>Durasi</td>
              <td>:</td>
              <td>{order.service_data?.month} Bulan</td>
            </tr>
            <tr>
              <td>Harga</td>
              <td>:</td>
              <td>
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(order.service_data?.price)}
              </td>
            </tr>
            <tr>
              <td>Potongan (Diskon)</td>
              <td>:</td>
              <td>{order.service_data?.discount}%</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>:</td>
              <td>
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(order.service_data?.total)}
              </td>
            </tr>
          </table>
          <hr />
          <h5>Item</h5>
          {order.cart?.map((value, index) => (
            <>
              <table>
                <tr>
                  <td>Tipe</td>
                  <td>:</td>
                  <td>{value.type}</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td>:</td>
                  <td>{value.name}</td>
                </tr>
                <tr>
                  <td>Harga</td>
                  <td>:</td>
                  <td>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(value.price)}
                  </td>
                </tr>
                <tr>
                  <td>Qty</td>
                  <td>:</td>
                  <td>{value.qty}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>:</td>
                  <td>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(value.total)}
                  </td>
                </tr>
              </table>
              <hr />
            </>
          ))}
          <h5>Status</h5>
          <table>
            <tr>
              <td>Status</td>
              <td>:</td>
              <td>{order.status}</td>
            </tr>
          </table>
          <hr />
          <div>
            <div>Bukti Pembayaran : </div>
            <img
              src={order.image}
              className="img-fluid img-thumbnail"
              style={{ maxHeight: 80 }}
            />
          </div>
          <hr />
          <p>Unggah Bukti Pembayaran</p>
          <form onSubmit={upload}>
            <div className="form-group">
              <label className="text-muted">Gambar</label>
              <input
                type="file"
                className="form-control-file"
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Unggah
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
