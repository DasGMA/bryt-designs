import React, { memo } from "react";

const AddressForm = ({ step = 0, handleFormChange = () => {}, state }) => {
  if (step !== 1) return null;

  const { address, apartment, country, city, zipcode, company, phoneNumber } =
    state;

  return (
    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-6 sm:col-span-3">
        <label
          for="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleFormChange}
          placeholder="Address"
          className="mt-1 p-2  p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          for="apartment"
          className="block text-sm font-medium text-gray-700"
        >
          Apartment, Suite, etc
        </label>
        <input
          type="text"
          name="apartment"
          id="apartment"
          value={apartment}
          onChange={handleFormChange}
          placeholder="Apartment, Suite, etc"
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-3 sm:col-span-2">
        <label
          for="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <select
          type="text"
          name="country"
          value={country}
          id="country"
          onChange={handleFormChange}
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div className="col-span-3 sm:col-span-2">
        <label for="City" className="block text-sm font-medium text-gray-700">
          City
        </label>
        <select
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleFormChange}
          placeholder="City"
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select City</option>
          <option value="Long Beach">Long Beach</option>
        </select>
      </div>
      <div className="col-span-3 sm:col-span-2">
        <label
          for="zipcode"
          className="block text-sm font-medium text-gray-700"
        >
          Zipcode
        </label>
        <input
          type="text"
          name="zipcode"
          max="5"
          id="zipcode"
          value={zipcode}
          pattern="[0-9]*"
          onChange={handleFormChange}
          placeholder="Zipcode"
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6">
        <label
          for="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          value={company}
          onChange={handleFormChange}
          placeholder="Company"
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="col-span-6">
        <label for="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phone"
          value={phoneNumber}
          onChange={handleFormChange}
          placeholder="Phone Number"
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default memo(AddressForm);
