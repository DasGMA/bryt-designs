import React, { useState } from "react";
import { useCallback } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import FormNavigation from "./FormNavigation";
import PreferencesForm from "./PreferencesFrom";
import Stepper from "./Stepper";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  apartment: "",
  country: "",
  city: "",
  zipcode: "",
  company: "",
  phoneNumber: "",
  sendNotification: false,
  shareInformation: false,
  notificationPreferences: "",
};

const headers = ["Account", "Address", "Preferences"];

const RegistrationForm = () => {
  const [step, setStep] = useState(0);
  const [state, setState] = useState(initialState);

  const handleFormChange = useCallback((event) => {
    const { name, value, checked } = event.target;

    if (name === "sendNotification" || name === "shareInformation") {
      setState((prevState) => ({ ...prevState, [name]: checked }));
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
    }
  }, []);

  const nextStep = useCallback(() => {
    setStep((prevStep) => prevStep + 1);
  }, []);

  const previousStep = useCallback(() => {
    setStep((prevStep) => prevStep - 1);
  }, []);

  const submitForm = useCallback(() => {
    if (step !== 2) return;
    const filterState = Object.entries(state).reduce((newState, entry) => {
      const [name, value] = entry;

      if (value !== "" && name !== "confirmPassword")
        newState = { ...newState, [name]: value };

      return newState;
    }, {});

    console.log(JSON.stringify(filterState));
  }, [step]);

  return (
    <div className="px-6 w-full">
      <div className="flex justify-center mb-10">
        <h2 className="text-6xl font-semibold">{headers[step]}</h2>
      </div>
      <Stepper step={step} />
      <div className="overflow-hidden shadow sm:rounded-md my-5">
        <div className="bg-white px-4 py-5 sm:p-6">
          <AccountForm
            step={step}
            handleFormChange={handleFormChange}
            state={state}
          />
          <AddressForm
            step={step}
            handleFormChange={handleFormChange}
            state={state}
          />
          <PreferencesForm
            step={step}
            handleFormChange={handleFormChange}
            state={state}
          />
        </div>
      </div>
      <FormNavigation
        step={step}
        nextStep={nextStep}
        previousStep={previousStep}
        submitForm={submitForm}
        state={state}
      />
    </div>
  );
};

export default RegistrationForm;
