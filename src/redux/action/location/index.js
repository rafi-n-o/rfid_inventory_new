import Api from "../../../api/Api";

const storeLocation = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/locations", form, {
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

export { storeLocation };
