import Api from "../../../api/Api";

const storeRegister = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/register", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const storeLogin = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/login", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getUser = () => {
  return new Promise((resolve, reject) => {
    Api.get("/user", {
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

const uploadImageUser = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/users/upload-image", form, {
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

export { storeRegister, storeLogin, getUser, uploadImageUser };
