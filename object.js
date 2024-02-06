const myPet = {
    name : "Travis",
    age : 2,
    food : "Fish",
    color : "White",
    specis : "Hulo beral",
    "is Male" : true,
};
console.log(myPet);
console.log(myPet.color);
console.log(myPet["is Male"]);
myPet.age = 6;
console.log(myPet);
const catFood = myPet.food;
console.log(catFood);


for(let key in myPet){
    console.log(key);
}
// console.log(myPet.key);
