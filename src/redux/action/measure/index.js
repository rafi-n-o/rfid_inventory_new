import Api from "../../../api/Api";

const storeMeasure = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/measures", form, {
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

const getMeasures = () => (dispatch) => {
  Api.get(`/measures`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_MEASURES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const updateMeasure = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/measures/${id}`, form, {
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

export { storeMeasure, getMeasures, updateMeasure };
