const initialState = {
  token: "tes ada user",
};

const UserReducer = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      token: action.payload,
    };
  }

  return state;
};

export default UserReducer;
