import Api from "../../../api/Api";

const storeUserLog = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/user-logs", form, {
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

const getUserLogs =
  (id, activity = "", startAt = "", endAt = "") =>
  (dispatch) => {
    Api.get(
      `/user-logs?user=${id}&activity=${activity}&start_at=${startAt}&end_at=${endAt}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((res) => {
        dispatch({
          type: "GET_USER_LOGS",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

export { getUserLogs, storeUserLog };
