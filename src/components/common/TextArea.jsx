import React from "react";
import { Field, ErrorMessage } from "formik";

const TextArea = ({
  label,
  name,
  type,
  rows = 5,
  cols,
  placeholder,
  //   required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-neutral-900 mb-2"
      >
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none resize-y"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm mt-1 text-red-600"
      />
    </div>
  );
};

export default TextArea;
