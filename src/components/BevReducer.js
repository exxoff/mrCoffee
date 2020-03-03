export const BevReducer = (state, action) => {
  switch (action.type) {
    case "pour": {
      return {
        ...state,
        text: action.payload.text,
        loading: action.payload.loading
      };
    }
    case "done": {
      return { ...state, text: "", loading: false };
    }

    default:
      return state;
  }
};
