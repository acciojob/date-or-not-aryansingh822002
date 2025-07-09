var isDate = function (input) {
  //   write your code here
	if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // Try converting to a Date (for strings, numbers, etc.)
  const parsed = new Date(input);
  return !isNaN(parsed.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
