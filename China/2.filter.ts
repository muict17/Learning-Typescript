const dataOne: number[] = [17,29,18,30,11,9,10,23];
for(let i=0;i<dataOne.length;i++){
    if(dataOne[i]>15){
        console.log(dataOne[i]);
    }
}
console.log(dataOne.filter(function(el){
    return el>15
}))