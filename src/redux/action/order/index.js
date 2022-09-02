import Api from "../../../api/Api";

const storeOrder = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/orders", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getOrder = (token) => (dispatch) => {
  Api.get(`/orders/token/${token}`)
    .then((res) => {
      dispatch({
        type: "GET_ORDER",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const uploadPaymentProof = (token, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/orders/token/${token}/upload`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export { storeOrder, getOrder, uploadPaymentProof };
