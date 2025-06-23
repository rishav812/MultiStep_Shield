import React, { useEffect } from "react";
import AccountSecurity from "./Step2AccSec";
import FinancialInfo from "./Step3FinInfo";
import PersonalInfo from "./Step1PerInfo";
import { useReducer, useState } from "react";
import { initialState, reducer } from "../../context/FormReducerContext";
import Summary from "./Summary";
import { mockSubmitForm } from "../../service/mockSubmit";
import { storage } from "../../utils/storage";

function MultiStepForm() {
  const [error, setError] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const stepCount = state.stepCount;

  useEffect(() => {
    const rawData = storage.get("authData");
    let count = storage.get("stepCount");
    let data, stepCount;

    try {
      data = rawData ? JSON.parse(rawData) : initialState.formData;
      stepCount = count ? count : initialState.stepCount;
      dispatch({
        type: "UPDATE_STEP_AND_DATA",
        payload: { stepCount: stepCount, formData: data },
      });
    } catch (e) {
      console.error("Invalid JSON in authData:", e);
    }
    console.log("data from ls >>>>>>", data);
  }, []);

  const onUpdatePersonalInfo = (data: any) => {
    dispatch({
      type: "UPDATE_STEP_AND_DATA",
      payload: { stepCount: 1, formData: data },
    });
    storage.set("authData", JSON.stringify({ ...state.formData, ...data }));
    storage.set("stepCount", 1);
  };

  const onUpdateAccountInfo = (data: any) => {
    dispatch({
      type: "UPDATE_STEP_AND_DATA",
      payload: { stepCount: 2, formData: data },
    });
    storage.set("authData", JSON.stringify({ ...state.formData, ...data }));
    storage.set("stepCount", 2);
  };

  const onUpdateFinancialInfo = (data: any) => {
    dispatch({
      type: "UPDATE_STEP_AND_DATA",
      payload: { stepCount: 3, formData: data },
    });
    storage.set("authData", JSON.stringify({ ...state.formData, ...data }));
    storage.set("stepCount", 3);
  };

  const HandleBack = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const finalSubmit = async () => {
    try {
      await mockSubmitForm(state.formData);
      alert("Form submitted successfully!");
    } catch (serverErrors) {
      // Object.entries(serverErrors).forEach(([field, message]) => {
      //   setError(field as keyof FormValues, { message });
      // });
    }
  };

  const resetFormData = () => {
    storage.clear();
    dispatch({ type: "RESET_STATE" });
  };

  console.log("state from parent>>>", state);
  return (
    <div>
      {stepCount == 0 ? (
        <PersonalInfo
          onDispatch={onUpdatePersonalInfo}
          formData={state.formData}
        />
      ) : stepCount == 1 ? (
        <AccountSecurity
          onDispatch={onUpdateAccountInfo}
          onBack={HandleBack}
          formData={state.formData}
        />
      ) : stepCount == 2 ? (
        <FinancialInfo
          onDispatch={onUpdateFinancialInfo}
          onBack={HandleBack}
          formData={state.formData}
        />
      ) : (
        <Summary
          formData={state.formData}
          onBack={HandleBack}
          onSubmit={finalSubmit}
          resetData={resetFormData}
        />
      )}
    </div>
  );
}

export default MultiStepForm;
