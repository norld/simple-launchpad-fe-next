const initialState = {
  launchpads: [],
  loading: true,
};

const launchpadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getLaunchpads":
      return {
        ...state,
        launchpads: action.payload,
        loading: false,
      };

    case "createLaunchpad":
      return {
        ...state,
        createLaunchpadData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default launchpadsReducer;
