const num = [33, 55, 34, 78, 99, 24, 67, 78, 8];
let sumOfEven = 0;
let sumOfOdd = 0;
for ( let i=0 ; i<num.length ; i++){
    let j = num[i];
    if(j%2 === 0){
      sumOfEven += j;  
    }
    else{
        sumOfOdd += j;
    }
}
console.log(sumOfEven);
console.log(sumOfOdd);