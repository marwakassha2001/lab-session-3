let arrayList = [1, 2, 3, 4, 3, 21, 0];
let max = arrayList[0];
for (let i = 0; i < arrayList.length; i++) {
  for( let j = i+1; j < arrayList.length; j++){

  if (arrayList[i] > arrayList[j]) {
    max = arrayList[i];
 }
   }
}

alert(max);