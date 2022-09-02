import Api from "../../../api/Api";

const getItems =
  (warehouseId = "", productId = "") =>
  (dispatch) => {
    Api.get(`/items?warehouse=${warehouseId}&product=${productId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        dispatch({
          type: "GET_ITEMS",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

export { getItems };
