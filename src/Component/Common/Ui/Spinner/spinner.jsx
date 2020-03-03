import React from 'react';
import { Spin } from 'antd';

const Spinner = ({ children, spinning }) => {
    return <Spin spinning={spinning}>{children}</Spin>;
};

export default Spinner;
