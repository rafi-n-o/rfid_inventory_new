import Api from "../../../api/Api";

const storeContact = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/contacts", form, {
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

const getContacts = () => (dispatch) => {
  Api.get("/contacts", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_CONTACTS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const updateContact = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/contacts/${id}`, form, {
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

export { storeContact, getContacts, updateContact };
