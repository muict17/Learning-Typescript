const data : string[] = ["a","b",'c','d'];

function oddToUpperAndEvenToLower(element: string, index){
    if(index % 2 === 0){
        return element.toLowerCase();
    }
    return element.toUpperCase();
}
for(let i=0;i<data.length;i++){
    console.log(data[i].toUpperCase())
}
console.log(data.map(function(el){
    return el.toUpperCase();
}))

console.log(data.map(oddToUpperAndEvenToLower))
