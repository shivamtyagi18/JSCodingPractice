var x="100"
var revbinx
tempx=parseInt(x,10)
console.log("1",tempx)
if(tempx>=0){
    revbinx=x.split("").reverse().join("") //reversing and then joining
    console.log("2",revbinx,typeof(revbinx))
    revbinx=parseInt(revbinx,10)
    console.log("3",revbinx,typeof(revbinx))
    console.log("4",tempx,revbinx)
}

if(tempx==revbinx) console.log(tempx,revbinx,true)
else console.log(false)

// function test(y){
// var tempq = y
// var tempr
// console.log(tempx,typeof(tempx))
// // tempq=Math.floor(tempq/10)
// // tempr=tempq%10
// // console.log(tempq,tempr)
// while(tempq!=0){
//     tempr=tempq%10
//     tempq=Math.floor(tempq/10)
//     console.log(tempq,tempr)
// }
// }

// test(x)



