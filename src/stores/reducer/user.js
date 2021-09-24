const initialState = {
  token: "tes ada user",
  delivery: {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    country: "",
    state: "",
    city: "",
    postCode: "",
    address: ""
  }
};

const UserReducer = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      token: action.payload,
    };
  } else  if (action.type === "SET_DELIVERY") {
    return {
      ...state,
      delivery: action.payload,
    };
  }

  return state;
};

export default UserReducer;
