import React from 'react';

const Button = ({ label, href }) => (
  <a className="button" href={href}>
    {label}
  </a>
);

export default Button;