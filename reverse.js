const commitment = "I will work hard and will never give up.";
// reverse  this = '.pu evig reven ....'

const parts = commitment.split("");
// console.log(parts);
const reversedParts = parts.reverse();
// console.log(reversedParts);
const reversedCommitment = reversedParts.join("");
// console.log(reversedCommitment);

let reverseCom = "";
for (const letter of commitment) {
  //   reverseCom = letter + reverseCom;
  reverseCom += letter;
  //   console.log(letter, "=>", reverseCom);
}
console.log(reverseCom);

let reverseCom1 = "";
for (i = commitment.length - 1; i >= 0; i--) {
  reverseCom1 += commitment[i];
  console.log(commitment[i], "=>", reverseCom1);
}
console.log(reverseCom1);
