const dataTwo: number[] = [17,29,18,30,11,9,10,23];
let sum=0;
for(let i=0;i<dataTwo.length;i++){
    sum = sum + dataTwo[i];
}
console.log(dataTwo.reduce(function(pre,cur){
    return pre+cur
},0))