import Api from "../../../api/Api";

const getDevices = () => (dispatch) => {
  Api.get("/devices")
    .then((res) => {
      dispatch({
        type: "GET_DEVICES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getDevices };
