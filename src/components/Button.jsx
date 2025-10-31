import React from 'react';
import { Link } from 'react-router-dom';

function Button({ type, color = 'bg-blue-300', to, children }) {
  return (
    <Link to={to} className="flex justify-center">
      <button type={type} className={`cursor-pointer rounded-lg p-2 ${color}`}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
