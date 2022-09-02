import Api from "../../../api/Api";

const getMutations =
  (warehouseId = "", type = "", startAt = "", endAt = "") =>
  (dispatch) => {
    Api.get(
      `/mutations?warehouse=${warehouseId}&type=${type}&start_at=${startAt}&end_at=${endAt}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((res) => {
        dispatch({
          type: "GET_MUTATIONS",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

const getMutationDatas = (id) => (dispatch) => {
  Api.get(`/mutations/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_MUTATION_DATAS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const printPdf =
  (warehouseId = "", type = "", startAt = "", endAt = "") =>
  (dispatch) => {
    Api.get(
      `/mutations/pdf?warehouse=${warehouseId}&type=${type}&start_at=${startAt}&end_at=${endAt}`,
      {
        responseType: "blob",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    ).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `mutations_${type}.pdf`);
      document.body.appendChild(link);
      link.click();
    });
  };

const printExcel =
  (warehouseId = "", type = "", startAt = "", endAt = "") =>
  (dispatch) => {
    Api.get(
      `/mutations/excel?warehouse=${warehouseId}&type=${type}&start_at=${startAt}&end_at=${endAt}`,
      {
        responseType: "blob",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    ).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `mutations_${type}.xlsx`);
      document.body.appendChild(link);
      link.click();
    });
  };

export { getMutations, getMutationDatas, printPdf, printExcel };
