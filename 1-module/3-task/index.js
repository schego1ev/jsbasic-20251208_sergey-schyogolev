function ucFirst(str) {
  return str.length < 2 ? str.toUpperCase() : `${str[0].toUpperCase()}${str.slice(1)}`;
}
