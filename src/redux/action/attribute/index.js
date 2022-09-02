import Api from "../../../api/Api";

const storeAttribute = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/attributes", form, {
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

const getAttributes = () => (dispatch) => {
  Api.get("/attributes", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_ATTRIBUTES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const updateAttribute = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/attributes/${id}`, form, {
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

export { storeAttribute, getAttributes, updateAttribute };
