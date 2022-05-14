const arr = [42, 5, 120];
const arrOfObj = [
  {
    id: 42,
    username: "Rei"
  },
  {
    id: 5,
    username: "Shinji"
  },
  {
    id: 120,
    username: "Asuka"
  }
];

const findThis = "Asuka";
// const foundInarr = arr.find(e => e == findThis);
const foundInArrOfObj = arrOfObj.find(e => e.username == findThis);
// const foundInArrOfObj = arrOfObj.find(e.username => console.log(e.username));

// console.log(foundInarr);
console.log(foundInArrOfObj);
