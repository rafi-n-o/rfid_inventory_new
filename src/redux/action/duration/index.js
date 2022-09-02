import Api from "../../../api/Api";

const getDurations = (id) => (dispatch) => {
  Api.get(`/durations?service=${id}`)
    .then((res) => {
      dispatch({
        type: "GET_DURATIONS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getDurations };
