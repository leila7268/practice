function randomNumber(max , min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let retRandom = randomNumber(10 , 20);
console.log(retRandom) ;

for(var i =10; i < 20; i++){
    var random =Math.floor( Math.random()* (20 - 10 + 1 ) + 10);
    console.log(random);
 }