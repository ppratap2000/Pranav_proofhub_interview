let arr = [1, 4, 3, 7, 2, 8]; //Array Declaration
arr.push(5); //Adding element/item
arr.pop(5); //Deleting an item
let index = 3;
let element = 6;
arr.splice(index, 0, element); //Added item=6 at index =3;
arr.splice(index, 1); //Deleted item=6 from particular index =3;
console.log(arr);
