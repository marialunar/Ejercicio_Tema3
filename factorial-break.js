let num = 10;
let fact = 1;

while(num > 1) {
    fact *= num;
    num --;
    if (num === 1){
        console.log(fact);
        break;
    };
}
