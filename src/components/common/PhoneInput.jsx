import React from "react";
import { Field, ErrorMessage } from "formik";

const PhoneInput = ({ label, name, required = false }) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-neutral-900"
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-3 border border-neutral-300 rounded-lg bg-neutral-50">
          <span className="text-2xl">🇳🇬</span>
          <span className="text-neutral-700">+234</span>
        </div>
        <Field
          id={name}
          name={name}
          type="tel"
          placeholder="802 123 4567"
          className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 outline-none"
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 mt-1"
      />
    </div>
  );
};

export default PhoneInput;
