// Good Luck 💪🏾
function brokenKeys(correctWord, wrongWord){
    let brokenKey = [];
     for (let i = 0; i < correctWord.length; i++) {
          if (correctWord[i] !== wrongWord[i]) { 
            if (!brokenKey.includes(correctWord[i])) {
              brokenKey.push(correctWord[i]);
            }
          }
        }
        return brokenKey;
      } 
    
    
console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp")) //➞ ["a","t"]
console.log(brokenKeys("good night", "gppd night"))// ➞ ["o"]