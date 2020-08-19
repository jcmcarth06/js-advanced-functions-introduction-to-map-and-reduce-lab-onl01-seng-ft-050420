// Your code here
const mapToNegativize = arr => {
  let newArr = [];
  arr.forEach( e => newArr.push(e * -1));
  return newArr;
};

const mapToNoChange = arr => {
  let newArr = [];
  arr.forEach( e => newArr.push(e));
  return newArr;
};

const mapToDouble = arr => {
  let newArr = [];
  arr.forEach( e => newArr.push(e * 2));
  return newArr;
};

const mapToSquare = arr => {
  let newArr = [];
  arr.forEach( e => newArr.push(e * e));
  return newArr;
};

const reduceToTotal = (arr, start = 0) => {
  let value = start;
  arr.forEach( e => value += e);
  return value;
};

const reducetoAllTrue =arr => {
  let bool = true;
  arr.forEach( e => {
    if (!e) {
      bool = false;
    }
  })
  return bool;
};
