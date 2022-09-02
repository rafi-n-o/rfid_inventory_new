import Api from "../../../api/Api";

const getEpcLogs = (epc) => (dispatch) => {
  Api.get(`/epc-logs?epc=${epc}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_EPC_LOGS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getEpcLogs };
