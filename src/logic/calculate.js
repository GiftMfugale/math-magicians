import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation === '=') {
        // Reset after equals
        return { total: null, next: buttonName, operation: null };
      }
      if (operation) {
        return { total, next: next ? next + buttonName : buttonName, operation };
      }
      return { total: total === '0' || total === null ? buttonName : total + buttonName, next, operation };

    case '+':
    case '-':
    case 'x':
    case '/':
    case '%':
      if (total && next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: buttonName,
        };
      }
      if (next) {
        return { total: next, next: null, operation: buttonName };
      }
      return { total, next, operation: buttonName };
    case '=':
      if (total && next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: buttonName,
        };
      }
      return { total, next, operation };

    case '.':
      if (operation) {
        if (next === null) return { total, next: '0.', operation };
        if (next.includes('.')) return { total, next, operation };
      }
      return { total: `${total || '0'}.`, next, operation };

    case '+/-':
      if (next) {
        return { total, next: (-1 * parseFloat(next)).toString(), operation };
      }
      if (total) {
        return { total: (-1 * parseFloat(total)).toString(), next, operation };
      }
      return { total: '0', next, operation };

    case 'AC':
      return { total: null, next: null, operatio: null };
    default:
      return { total, next, operation };
  }
};

export default calculate;
