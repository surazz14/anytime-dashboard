import React from 'react';

const Label = ({ label,...otherProps }) => {
    return (
        <label
            style={{
                fontSize: '16px',
                lineHeight: '22px',
            }}
            {...otherProps}
        >
            {label}:
        </label>
    );
};

export default Label;
