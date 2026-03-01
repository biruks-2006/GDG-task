function checkOddEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
function checkDivisibility(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both 3 and 5";
  } else if (num % 3 === 0) {
    return "Divisible by 3";
  } else if (num % 5 === 0) {
    return "Divisible by 5";
  } else {
    return "Not divisible by 3 or 5";
  }
}
function updateCounts(num, stats) {
  stats.totalSum += num;
  if (num % 2 === 0) {
    stats.evenCount++;
  } else {
    stats.oddCount++;
  }
}
function main() {
  let stats = {
    totalSum: 0,
    oddCount: 0,
    evenCount: 0,
  };

  for (let num = 5; num <= 15; num++) {
    console.log(
      `Number: ${num} -> ${checkOddEven(num)}, ${checkDivisibility(num)}`,
    );
    updateCounts(num, stats);
  }

  console.log("\nSummary:");
  console.log(`Total sum of numbers: ${stats.totalSum}`);
  console.log(`Odd numbers count: ${stats.oddCount}`);
  console.log(`Even numbers count: ${stats.evenCount}`);
}
main();
