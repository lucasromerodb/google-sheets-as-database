Array.prototype.toObject = function() {
  const [keys, ...rows] = this;
  return rows.map(row =>
    Object.assign({}, ...keys.map((key, index) => ({ [key]: row[index] })))
  );
};

Array.prototype.splitPhotos = function() {
  return this.map(item => ({
    ...item,
    fotos: item.fotos && item.fotos.split(";")
  }));
};
