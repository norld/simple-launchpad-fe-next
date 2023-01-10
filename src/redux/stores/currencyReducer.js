const initialState = {
  currencies: [],
  loading: true,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCurrencies":
      return {
        ...state,
        currencies: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default currencyReducer;
