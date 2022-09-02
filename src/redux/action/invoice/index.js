import Api from "../../../api/Api";

const getInvoices = (email) => (dispatch) => {
  Api.get(`/invoices?email=${email}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_INVOICES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getInvoices };
