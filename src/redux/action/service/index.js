import Api from "../../../api/Api";

const getServices =
  (category = "", groupCategory = false) =>
  (dispatch) => {
    Api.get(`/services?category=${category}&group_category=${groupCategory}`)
      .then((res) => {
        dispatch({
          type: "GET_SERVICES",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

const getService = (id) => (dispatch) => {
  Api.get(`/services/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_SERVICE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getServices, getService };
