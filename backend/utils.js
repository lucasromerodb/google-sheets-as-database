Array.prototype.toObject = function() {
  const [keys, ...rows] = this;
  return rows.map(row =>
    Object.assign({}, ...keys.map((key, index) => ({ [key]: row[index] })))
  );
};

Array.prototype.splitItems = function(value) {
  return this.map(item => ({
    ...item,
    [value]: item[value] && item[value].split(/\s*,\s*/).map(i => i.trim())
  }));
};

Array.prototype.splitFeatures = function() {
  return this.map(item => ({
    ...item,
    caracteristicas:
      item.caracteristicas &&
      item.caracteristicas
        .split(/\s*\*\*\s*/)
        .slice(1)
        .map(i => i.trim())
  }));
};

Array.prototype.toBoolean = function(value) {
  return this.map(item => ({
    ...item,
    [value]: /^\s*si\s*$/i.test(item[value])
  }));
};
