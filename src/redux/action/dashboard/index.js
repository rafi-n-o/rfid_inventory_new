import Api from "../../../api/Api";

const getDashboards = () => (dispatch) => {
  Api.get("/dashboards", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_DASHBOARDS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getDashboards };
