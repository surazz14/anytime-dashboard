import React from "react";
import { Button, Upload } from "antd";

const action = "https://www.mocky.io/v2/5cc8019d300000980a055e76";
const uploadList = {
  showDownloadIcon: false
};

function FileUpload({
  input: { name, value, onChange, ...otherInputProps },
  meta: { touched, error },
  defaultValue,
  children,
  ...customProps
}) {
  const hasError = touched && error !== undefined;
  return (
    <Upload
      style={{ borderColor: hasError ? "red" : "" }}
      onChange={onChange}
      name={name}
      {...otherInputProps}
      {...customProps}
      showUploadList={uploadList}
      beforeUpload={() => false}
      action={action}
    >
      <Button>Upload</Button>
      <br />
      {hasError && <span style={{ color: "red" }}>{error}</span>}
    </Upload>
  );
}
export default FileUpload;
