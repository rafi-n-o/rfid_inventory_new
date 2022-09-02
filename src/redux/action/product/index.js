import Api from "../../../api/Api";

const storeProduct = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/products", form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getProducts =
  (categoryId = "") =>
  (dispatch) => {
    Api.get(`/products?category=${categoryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

const getProduct = (id) => (dispatch) => {
  Api.get(`/products/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_PRODUCT",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const updateProduct = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/products/${id}`, form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getProductStock = (id) => (dispatch) => {
  Api.get(`/products/${id}/stock`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }).then((res) => {
    dispatch({
      type: "GET_PRODUCT_STOCK",
      payload: res.data.data,
    }).catch((err) => {
      console.log(err.response.data);
    });
  });
};

export {
  storeProduct,
  getProducts,
  getProduct,
  updateProduct,
  getProductStock,
};
