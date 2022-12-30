const initialState = {
  chains: [],
  loading: true,
};

const chainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getChains":
      return {
        ...state,
        chains: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default chainReducer;
