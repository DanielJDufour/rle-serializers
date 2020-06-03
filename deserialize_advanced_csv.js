const deserialize_advanced_csv = csv => {
  const result = []
  csv.split(",").forEach(it => {
    const splitted = it.split("x").map(Number);
    const runLength = splitted.length === 1 ? 1 : splitted[1];
    const num = splitted[0];
    result.push(runLength);
    result.push(num);
  });
  return result;
};

module.exports = deserialize_advanced_csv;
