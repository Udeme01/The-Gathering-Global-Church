import React from "react";
import { Field, ErrorMessage } from "formik";

const TextInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-neutral-900"
      >
        {label} {required && <span className="text-purple-600">*</span>}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 mt-1"
      />
    </div>
  );
};

export default TextInput;
