export const paralelNumber = (value, dataLength) => {
  if (value + 1 < dataLength) {
    return value + 1;
  } else {
    return 0;
  }
};
