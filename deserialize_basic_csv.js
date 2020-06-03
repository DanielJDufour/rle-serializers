const deserialize_basic_csv = csv => {
  return csv.split(",").map(Number);
};

module.exports = deserialize_basic_csv;
