const operate = (numberOne, numberTwo, operation) => {
  const num1 = parseFloat(numberOne);
  const num2 = parseFloat(numberTwo);

  switch (operation) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case 'x':
      return (num1 * num2).toString();
    case '/':
      if (num2 === 0) {
        return 'Error';
      }
      return (num1 / num2).toString();
    case '%':
      return (num1 % num2).toString();
    default:
      return '0';
  }
};

export default operate;
