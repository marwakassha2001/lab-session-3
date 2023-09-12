function evaluateKey (numberOfKeys){
var numberOfKeys = parseInt(prompt("enter the number of keys for to4"));
switch (numberOfKeys){
    case 0:
        alert("we sank together");
        break;
    case 30000:
        alert("we made it");
        break;
    default:
        alert("we need to swim alittle bit more");
        break;
        
}
}

function minMax (arrayList) {
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
} 

function image () {
    for(let i = 1; i <= 6; i++){
        var line = "";
        for(let j = 1; j <= i ; j++){
        line += "*";
        }
        console.log(line)
    }
}

function largesetNum (arrayList) {
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
}

function squared (num) {

  const num= 5;
  const result = num * num ;
  
  function squreNum(num){
    return result ;
  }
  console.log("The square of", num, "is", result);
}

const assessment = evaluateKey (numberOfKeys);
console.log(assessment);

const result = squared(Num);
console.log("The square of", Num, "is", result);

const largest =  largesetNum(arrayList);
console.log("The largest number is:", largest);