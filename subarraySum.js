var A = [1,0,1,0,1]
const S=2
var temp=[]
var sum=0
var i=0
var j=0
var count=0
for (j in A){
    j=parseInt(j)
    i=j
    sum=0
    //console.log("J",j)
    while(i<=A.length)
    {
        //console.log("I while",i)
        sum=sum+A[i]
        if (sum==S)
        count=count+1
        i=i+1
    }
    console.log("count",count)
    
}

    
    

