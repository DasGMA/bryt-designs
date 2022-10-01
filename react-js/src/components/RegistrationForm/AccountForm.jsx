import React, { memo } from "react";

const AccountForm = ({ step = 0, handleFormChange = () => {}, state }) => {
  if (step !== 0) return null;

  const { firstName, lastName, username, email, password, confirmPassword } =
    state;

  return (
    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-6 md:col-span-3">
        <label
          for="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First Name"
          value={firstName}
          onChange={handleFormChange}
          className="mt-1 p-2  p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          for="last-name"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="last-name"
          value={lastName}
          placeholder="Last Name"
          onChange={handleFormChange}
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6">
        <label
          for="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          required
          value={username}
          placeholder="Username"
          onChange={handleFormChange}
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6">
        <label
          for="email-address"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="text"
          name="email"
          required
          id="email-address"
          value={email}
          placeholder="Email Address"
          onChange={handleFormChange}
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          for="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          placeholder="Password"
          onChange={handleFormChange}
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          for="confirm-password"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          required
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={handleFormChange}
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default memo(AccountForm);
