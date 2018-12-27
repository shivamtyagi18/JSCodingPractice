var x="-153"
tempx=parseInt(x,10)
console.log(tempx,typeof(tempx))

if(tempx>=0 && tempx<Math.pow(2,31)){
    var revbinx=x.split("").reverse().join("")
    console.log(revbinx,typeof(revbinx))
    // revbinx=revbinx.reverse()
    // console.log(revbinx,typeof(revbinx))
    // revbinx=revbinx.join("")
    // console.log(revbinx,typeof(revbinx))
    revbinx=parseInt(revbinx,10)
    console.log(revbinx,typeof(revbinx))
    if(revbinx<Math.pow(2,31)){
        console.log(revbinx)
    } else console.log(0)
}

else if( tempx>(-(Math.pow(2,31))) && tempx<0){
    var revbinx=x.slice(1).split("").reverse().join("")
    console.log(revbinx,typeof(revbinx))
    // revbinx=revbinx.reverse()
    // console.log(revbinx,typeof(revbinx))
     revbinx="-"+revbinx
    // console.log(revbinx,typeof(revbinx))
    revbinx=parseInt(revbinx,10)
    console.log(revbinx,typeof(revbinx))
    if(revbinx>(-(Math.pow(2,31)))){
        console.log(revbinx)
    } else console.log(0)

} else console.log(0)

// var binx=x.toString(2)
// console.log(binx,typeof(binx))
// var revbinx=x.split("")
// console.log(revbinx,typeof(revbinx))
// revbinx=revbinx.reverse()
// console.log(revbinx,typeof(revbinx))
// revbinx=revbinx.join("")
// console.log(revbinx,typeof(revbinx))
// // revbinx=parseInt(revbinx,2)
// // console.log(revbinx,typeof(revbinx))
// revbinx=parseInt(revbinx,10)
// console.log(revbinx,typeof(revbinx))
