import React, { memo } from "react";

const FormNavigation = ({
  step,
  previousStep,
  nextStep,
  state,
  submitForm = () => {},
}) => {
  const {
    username,
    email,
    password,
    confirmPassword,
    address,
    country,
    city,
    zipcode,
  } = state;

  const disabledButton =
    (step === 0 &&
      (username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "")) ||
    (step === 1 &&
      (address === "" || country === "" || ((city === "") === zipcode) === ""));

  const onClick = () => {
    if (disabledButton) return;
    step === 2 ? submitForm() : nextStep();
  };

  return (
    <div className="flex flex-row justify-between w-full">
      <button
        hidden={step === 0}
        onClick={previousStep}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Back
      </button>
      <div hidden={step !== 0}></div>
      <button
        onClick={onClick}
        disabled={disabledButton}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
      >
        {step === 2 ? "Register" : "Next Step"}
      </button>
    </div>
  );
};

export default memo(FormNavigation);
