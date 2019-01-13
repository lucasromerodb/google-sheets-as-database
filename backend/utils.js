Array.prototype.toObject = function() {
  const [keys, ...rows] = this;
  return rows
    .filter(row => row.length)
    .map((row, i) =>
      Object.assign({}, ...keys.map((key, index) => ({ [key]: row[index] })))
    );
};

Array.prototype.addId = function() {
  return this.map((item, i) => ({
    ...item,
    id: i + 1
  }));
};

Array.prototype.splitItems = function(value) {
  return this.map(item => ({
    ...item,
    [value]: item[value] && item[value].split(/\s*,\s*/).map(i => i.trim())
  }));
};

Array.prototype.imgFromDrive = function() {
  return this.map(item => ({
    ...item,
    fotos:
      item.fotos &&
      item.fotos.map(photo =>
        photo.replace(
          "https://drive.google.com/open?id=",
          "https://drive.google.com/uc?id="
        )
      )
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
    [value]: item[value] && /^\s*si\s*$/i.test(item[value])
  }));
};
