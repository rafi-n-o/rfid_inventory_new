const stateTransfers = {
  transfers: [],
};

const stateTransferDatas = {
  transfer_datas: [],
};

const transfers = (state = stateTransfers, action) => {
  if (action.type === "GET_TRANSFERS") {
    return {
      ...state,
      transfers: action.payload,
    };
  }

  return state;
};

const transferDatas = (state = stateTransferDatas, action) => {
  if (action.type === "GET_TRANSFER_DATAS") {
    return {
      ...state,
      transfer_datas: action.payload,
    };
  }

  return state;
};

export { transfers, transferDatas };
