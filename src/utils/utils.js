export const splitData = (arr) => {
    let size =
      arr.length / 3;
    let subarray = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
      subarray[i] = arr.slice(i * size, i * size + size);
    }
    return subarray;
  };