module.exports = (words) => {
  return new Promise((resolve, reject) => {
    try {
      const groupedWordsWithQuantity = words.reduce((obj, word) => {
        if (obj[word]) {
          obj[word]++;
        } else {
          obj[word] = 1;
        }

        return obj;
      }, {});

      const groupedWordsResults = Object
          .keys(groupedWordsWithQuantity)
          .map(key => ({
            name: key,
            amount: groupedWordsWithQuantity[key],
          }))
          .sort((w1, w2) => w2.amount - w1.amount);
            
      resolve(groupedWordsResults);
    } catch (error) {
      reject(error);
    }
  });
};