export const initialState = {
  stepCount: 0,
  formData: {
    name: "",
    email: "",
    phone: "",
    password: "",
    securityQuestion: "",
    securityAnswer: "",
    incomeRange: "",
    employmentStatus: "",
  },
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_STEP_AND_DATA":
      return {
        stepCount: action.payload.stepCount,
        formData: { ...state.formData, ...action.payload.formData },
      };

    case "PREV_STEP":
      return {
        stepCount: state.stepCount - 1,
        formData: { ...state.formData },
      };

    case "RESET_STATE":
      return initialState;

    default:
      return state;
  }
};
