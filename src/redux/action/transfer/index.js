import Api from "../../../api/Api";

const getTransfers =
  (originId = "", destinationId = "") =>
  (dispatch) => {
    Api.get(`/transfers?origin=${originId}&destination=${destinationId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        dispatch({
          type: "GET_TRANSFERS",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

const getTransferDatas = (id) => (dispatch) => {
  Api.get(`/transfers/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_TRANSFER_DATAS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const printPdf =
  (originId = "", destinationId = "") =>
  (dispatch) => {
    Api.get(`/transfers/pdf?origin=${originId}&destination=${destinationId}`, {
      responseType: "blob",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `transfers.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

const printExcel =
  (originId = "", destinationId = "") =>
  (dispatch) => {
    Api.get(
      `/transfers/excel?origin=${originId}&destination=${destinationId}`,
      {
        responseType: "blob",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `transfers.xlsx`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

export { getTransfers, getTransferDatas, printPdf, printExcel };
