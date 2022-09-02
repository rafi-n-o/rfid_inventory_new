const stateMutations = {
  mutations: [],
};

const stateMutationDatas = {
  mutation_datas: [],
};

const mutations = (state = stateMutations, action) => {
  if (action.type === "GET_MUTATIONS") {
    return {
      ...state,
      mutations: action.payload,
    };
  }

  return state;
};

const mutationDatas = (state = stateMutationDatas, action) => {
  if (action.type === "GET_MUTATION_DATAS") {
    return {
      ...state,
      mutation_datas: action.payload,
    };
  }

  return state;
};

export { mutations, mutationDatas };
