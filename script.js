function isSameType(value1, value2) {
  const num1 = Number(value1);
  const num2 = Number(value2);

  const bothAreNaN = Number.isNaN(num1) && Number.isNaN(num2);
  if (bothAreNaN) return true;

  // Fallback to type comparison
  return typeof num1 === typeof num2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
