import React from "react";

const FormHeader = ({ title, subtitle, xtraTitle, className = "" }) => {
  return (
    <div
      className={`relative bg-black text-white flex flex-col justify-center items-center text-center h-[70vh] lg:h-[80vh] px-4 pt-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {subtitle && (
          <p className="text-sm font-medium tracking-widest uppercase mb-4 text-neutral-400">
            {subtitle}
          </p>
        )}
        <h1 className="text-xl font-bold">
          {title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index === title.split(" ").length - 1 ? "" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="text-white/60 mt-4 text-[14px] tracking-wide">
          {xtraTitle}
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
