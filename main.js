const input = 'Please rescue me from Seaworld!';

let whaleTalk = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (letter === 'e' || letter === 'u') {
      resultArray.push(letter);
    }
    for (let j = 0; j < vowels.length; j++) {
      const vowelLetter = vowels[j];
      if (letter === vowelLetter) {
        resultArray.push(letter);
      }
    }
  }
  return resultArray.join('').toUpperCase();
};

console.log(whaleTalk(input));
