const stateDashboards = {
  dashboards: [],
};

const dashboards = (state = stateDashboards, action) => {
  if (action.type === "GET_DASHBOARDS") {
    return {
      ...state,
      dashboards: action.payload,
    };
  }

  return state;
};

export { dashboards };
