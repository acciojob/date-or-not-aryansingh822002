var isDate = function (input) {
  //   write your code here
	if (input instanceof Date && !isNaN(input)) {
    return true;
  }
  
  if (typeof input === 'string' || typeof input === 'number') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }
  
  // For all other cases
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
