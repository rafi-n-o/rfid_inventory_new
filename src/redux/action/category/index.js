import Api from "../../../api/Api";

const storeCategory = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/categories", form, {
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

const getCategories = () => (dispatch) => {
  Api.get(`/categories`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const updateCategory = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/categories/${id}`, form, {
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

export { storeCategory, getCategories, updateCategory };
