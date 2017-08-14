import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, className, onChange }) => (

  <input
    type={type}
    placeholder={placeholder}
    className={`${className}`}
    onChange={(e) => onChange(e)} />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input;
