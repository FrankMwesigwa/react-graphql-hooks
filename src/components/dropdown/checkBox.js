import React from 'react';

const CheckBox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

export default CheckBox;
