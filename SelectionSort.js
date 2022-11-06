//selection sort
function selectionSort(array) {
  let min;
  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
}
console.log(selectionSort([2, 4, 2, 3, 11, 1, 2]));
