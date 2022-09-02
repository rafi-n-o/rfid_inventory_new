const stateDurations = {
  durations: [],
};

const durations = (state = stateDurations, action) => {
  if (action.type === "GET_DURATIONS") {
    return {
      ...state,
      durations: action.payload,
    };
  }

  return state;
};

export { durations };
