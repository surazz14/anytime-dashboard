import React from "react";
import { Button } from "antd";

function Buttons({ type, onClick, children, ...otherInputProps }) {
  return (
    <React.Fragment>
      <Button type={type} onClick={onClick} {...otherInputProps}>
        {children}
      </Button>
    </React.Fragment>
  );
}

export default Buttons;
