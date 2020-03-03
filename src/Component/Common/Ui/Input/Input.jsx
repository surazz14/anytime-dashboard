import React from "react";
import { Input } from "antd";

// Reusable Input Field component for all input in the app

const InputField = ({
  input: { name, value, onChange, ...otherInputProps },
  meta: { touched, error },
  defaultValue,
  ...customProps
}) => {
  const hasError = touched && error !== undefined;

  return (
    <div>
      <Input
        style={{ borderColor: hasError ? "red" : "" }}
        size="large"
        name={name && name}
        value={value || defaultValue || ""}
        onChange={onChange}
        {...otherInputProps}
        {...customProps}
      />
      {hasError && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default InputField;
