import React from "react";
import { Field, ErrorMessage } from "formik";

const RadioGroup = ({ label, name, options, required = false }) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-neutral-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <Field
              type="radio"
              name={name}
              value={option.value}
              className="w-5 h-5 text-red-600 border-neutral-300 focus:ring-red-600 focus:ring-2 cursor-pointer"
            />
            <span className="text-neutral-900 group-hover:text-neutral-700 transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 mt-1"
      />
    </div>
  );
};

export default RadioGroup;
