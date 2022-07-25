import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// get Vowel count
const getCount = (str) => {
  // Your solution
  let vowelCount = 0;
  for (let value of str) {
    if ("aeiou".includes(value)) vowelCount++;
  }
  return vowelCount;
};
console.log(getCount("my name is jayanth"));

// remove vowels
const removeVowel = (str) => {
  return str.replace(/[aeiou]/gi, "");
};
console.log(removeVowel("my name"));

// find the numbers which occurs odd number of times
const data = [1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 5, 5];
const obj = data.reduce((acc, val) => {
  return { ...acc, [val]: (acc[val] || 0) + 1 };
}, {});
const odd = Object.keys(obj).filter((key) => obj[key] % 2);

console.log(odd);
