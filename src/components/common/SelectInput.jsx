import React from "react";
import { Field, ErrorMessage } from "formik";

const SelectInput = ({ label, name, options, required = false }) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-neutral-900"
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        <Field
          as="select"
          id={name}
          name={name}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white cursor-pointer"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 mt-1"
      />
    </div>
  );
};

export default SelectInput;
