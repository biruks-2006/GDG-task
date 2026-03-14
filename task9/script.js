const calculate = (numbers = []) => {
  if (numbers.length === 0)
    return { sum: 0, max: undefined, first: undefined, last: undefined };
  const [first, ...rest] = numbers;
  const last = rest.length > 0 ? rest[rest.length - 1] : first;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const max = Math.max(...numbers);
  return { sum, max, first, last };
};
const nums = [10, 5, 20, 15];
console.log(calculate(nums));
console.log(calculate());
