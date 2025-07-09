var isDate = function (input) {
  //   write your code here
	if (input === null || input === undefined) return false;
  
  // If already a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }
  
  // If string or number, try to parse
  if (typeof input === 'string' || typeof input === 'number') {
    // Try parsing as Date
    const date = new Date(input);
    return !isNaN(date.getTime());
  }
  
  // For all other cases
  return false;
};

// Do not change the code below.
// const input = prompt("Enter Date.");
alert(isDate(input));
