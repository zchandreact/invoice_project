import React from 'react';

const Button = ({ variant, onClick, children }) => {

  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue text-primary';
      case 'secondary':
        return 'bg-transparent border border-secondary text-secondary';
      default:
        return 'bg-gray-400 text-gray-800';
    }
  };

  return (
    <button
      className={`py-2 px-4 ${getButtonStyles()}`}
      onClick={onClick}
    >
      
      {children}
    </button>
  );
};

export default Button;
