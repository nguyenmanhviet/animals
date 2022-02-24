// initial State
export const initInfor = {
  email: "",
  password: "",
  isFormValid: false,
};

// reduce Function

export const reducer = (state, action) => {
  switch (action.type) {
    case "ENTERED-EMAIL":
      return {
        ...state,
        email: action.data,
      };
    case "ENTERED-PASSWORD":
      return {
        ...state,
        password: action.data,
      };
    default:
      throw new Error("Invalid Infor");
  }
};

export const enterEmail = (value) => {
  return {
    type: "ENTERED-EMAIL",
    data: value,
  };
};

export const enterPassword = (value) => {
  return {
    type: "ENTERED-PASSWORD",
    data: value,
  };
};
