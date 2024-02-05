const numbers = [33, 55, 34, 78, 99, 24, 67, 78, 8];
for(let number of numbers){
    if(number === 78){
        continue;
    }
    console.log(number);
}