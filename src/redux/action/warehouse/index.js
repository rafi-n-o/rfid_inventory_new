import Api from "../../../api/Api";

const storeWarehouse = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/warehouses", form, {
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

const getWarehouse = (id) => (dispatch) => {
  Api.get(`/warehouses/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_WAREHOUSE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getWarehouses = () => (dispatch) => {
  Api.get(`/warehouses`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_WAREHOUSES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getWarehouseStock = (id) => (dispatch) => {
  Api.get(`/warehouses/${id}/stock`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_WAREHOUSE_STOCK",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { storeWarehouse, getWarehouse, getWarehouses, getWarehouseStock };
