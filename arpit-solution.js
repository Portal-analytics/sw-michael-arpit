var allNum=[];
var sum=0;
for(var i =0; i<1001; i++){
    if(i%5==0 || i%3==0){
        allNum.push(i);
    }
}
for(var i=0; i<allNum.length;i++){
    sum+=allNum[i];
}

console.log("The sum of numbers divisible by 3 or 5 below 1000 is:"+sum);