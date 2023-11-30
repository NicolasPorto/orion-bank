import React from 'react';
import { NumericFormat } from 'react-number-format';

const CurrencyInput = ({ value, onValueChange, className }) => {
  const handleInputChange = (values) => {
    const { formattedValue } = values;
    if (onValueChange) {
      onValueChange(formattedValue);
    }
  };

  return (
    <NumericFormat
      className={className}  
      value={value}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale={true}
      allowNegative={false}
      onValueChange={handleInputChange}
    />
  );
};

export default CurrencyInput;   