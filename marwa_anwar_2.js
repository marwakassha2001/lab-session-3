let arrayList = [1, 2, 3, 4, 3, 21, 0];
let max = arrayList[0];
let min = arrayList[0];
for (let i = 0; i < arrayList.length; i++) {
  if (arrayList[i] > max) {
    max = arrayList[i];
 }
   }

   for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] < min) {
      min = arrayList[i];
   }
     }
alert("min is:" + min + "\nMax is:" +max);