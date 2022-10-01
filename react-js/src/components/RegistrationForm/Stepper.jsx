import React from "react";

const Stepper = ({ step }) => {
  const step2 = step >= 1;
  const step3 = step === 2;

  return (
    <div className="flex flex-row justify-between w-full">
      <div
        className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full"
        style={{ backgroundColor: "orange" }}
      >
        <span className="font-medium text-white">1</span>
      </div>
      <div
        className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full"
        style={{ backgroundColor: step2 ? "orange" : "gray" }}
      >
        <span className="font-medium text-white">2</span>
      </div>
      <div
        className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full"
        style={{ backgroundColor: step3 ? "orange" : "gray" }}
      >
        <span className="font-medium text-white">3</span>
      </div>
    </div>
  );
};

export default Stepper;
