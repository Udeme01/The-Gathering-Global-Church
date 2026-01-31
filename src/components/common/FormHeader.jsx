import React from "react";

const FormHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div
      className={`relative bg-black text-white flex flex-col items-center justify-center text-center h-[40vh] md:h-[70vh] px-4 ${className}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {subtitle && (
          <p className="text-sm font-medium tracking-widest uppercase mb-4 text-neutral-400">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {title.split(" ").map((word, index) => (
            <span
              key={index}
              className={
                index === title.split(" ").length - 1
                  ? ""
                  : "text-purple-600"
              }
            >
              {word}{" "}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default FormHeader;
