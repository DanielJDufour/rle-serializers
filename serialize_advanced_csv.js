const serialize_advanced_csv = arr => {
  const results = [];
  for (let i = 0; i < arr.length; i+=2) {
    const runLength = arr[i];
    const value = arr[i + 1];
    if (runLength === 1) {
      results.push(value);
    } else {
      results.push(value + 'x' + runLength);
    }
  }
  return results.join(',');
};

module.exports = serialize_advanced_csv;
