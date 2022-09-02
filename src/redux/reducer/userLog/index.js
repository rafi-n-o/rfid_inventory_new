const stateUserLogs = {
  user_logs: [],
};

const userLogs = (state = stateUserLogs, action) => {
  if (action.type === "GET_USER_LOGS") {
    return {
      ...state,
      user_logs: action.payload,
    };
  }

  return state;
};

export { userLogs };
