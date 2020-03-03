import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextAreas = ({
  input: { name, value, onChange, ...otherInputProps },
  meta: { touched, error },
  defaultValue,
  ...customProps
}) => {
  const hasError = touched && error !== undefined;

  return (
    <div>
      <TextArea
        style={{ borderColor: hasError ? "red" : "" }}
        size="large"
        name={name}
        value={value || defaultValue || ""}
        onChange={onChange}
        {...otherInputProps}
        {...customProps}
      />
      {hasError && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default TextAreas;
