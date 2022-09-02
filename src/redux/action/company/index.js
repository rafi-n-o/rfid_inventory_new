import Api from "../../../api/Api";

const storeCompany = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/companies", form, {
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

const uploadImageCompany = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/companies/upload-image", form, {
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

export { storeCompany, uploadImageCompany };
