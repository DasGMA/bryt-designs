import React from "react";

const PreferencesForm = ({ step = 0, handleFormChange = () => {}, state }) => {
  if (step !== 2) return null;

  const { sendNotification, shareInformation, notificationPreferences } = state;

  return (
    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-6">
        <input
          id="sendNotification"
          type="checkbox"
          name="sendNotification"
          value={sendNotification}
          onChange={handleFormChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="sendNotification"
          className="ml-2 text-sm font-medium text-gray-700"
        >
          Send notifications
        </label>
      </div>
      <div className="col-span-6">
        <input
          id="shareInformation"
          type="checkbox"
          name="shareInformation"
          value={shareInformation}
          onChange={handleFormChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="shareInformation"
          className="ml-2 text-sm font-medium text-gray-700"
        >
          Share information with related marketer
        </label>
      </div>

      <div className="col-span-6">
        <label
          for="notificationPreferences"
          className="block text-sm font-medium text-gray-700"
        >
          Notification Preferences
        </label>
        <select
          type="text"
          name="notificationPreferences"
          value={notificationPreferences}
          id="notificationPreferences"
          onChange={handleFormChange}
          className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Email or Text</option>
          <option value="email">Email</option>
          <option value="text">Text</option>
        </select>
      </div>
    </div>
  );
};

export default PreferencesForm;
