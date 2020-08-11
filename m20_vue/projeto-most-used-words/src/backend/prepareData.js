module.exports = (rows) => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
          .filter(filterValidRow)
          .map(removePunctuation)
          .map(removeTags)
          .reduce(mergeRows)
          .split(' ')
          .map(word => word.toLowerCase());
            
      resolve(words);
    } catch (error) {
      reject(error);
    }
  });
};

const filterValidRow = (row) => {
  const notNumber = !parseInt(row.trim());
  const notEmpty = !!row.trim();
  const notInterval = !row.includes('-->');

  return notNumber && notEmpty && notInterval;
};

const removePunctuation = (row) => row.replace(/[,?!."-]/g, '');
const removeTags = (row) => row.replace(/(<[^>]+>)/ig, '').trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`;