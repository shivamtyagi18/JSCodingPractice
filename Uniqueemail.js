/**
 * @param {string[]} emails
 * @return {number}
 */


    var reg0=/\./g

    var reg1=/\+/
    var reg2=/\@/
    var count=0
    //expression = ["abc@leetcode","ab.c@leetcode","a.b+c@leetcode","x+y.z@leetcode","xyz+1@leet.code"]

    expression =["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    var counts = {};
    var expression1=[]
    var expression2=[]
    
    
    // var str=expression[0]
    // console.log(str)
    // var reg=new RegExp(str+"[^.]")
    // console.log(reg)
    console.log(reg0)
    console.log(reg1)
    console.log(reg2)

   
    // var x=expression[0].match(reg)
    // var y=expression[2].match(reg0)
    // if(y) console.log("new y",expression[2].substring(0,y.index)+expression[2].substring(y.index+1))
    // // var z=reg0.test(expression[1])
    // // if(z) console.log("new z",expression[1].substring(0,2)+expression[1].substring(3))
    // console.log("test x",x)
    // console.log("test y",y)
   // console.log("test z",z)

   for (i in expression){
    //var x=expression[i].match(reg2) // @
    //var z=expression[i].match(reg1) // +
    
    // if(z) {
    //     expression1[i]=expression[i].substring(0,z.index)  //omitting string after +
    // }
    //     expression2[i]=expression[i].substring(x.index) //storing string after @

        expression3=expression[i].split("@") //splitting string after @
        var z1=expression3[0].match(reg1) // finding +
        expression3[0]=expression3[0].substring(0,z1.index) //omitting all after +
        
        while ((array1 = reg0.exec(expression3[0])) !== null) { 
            expression3[0]=expression3[0].substring(0,reg0.lastIndex-1)+expression3[0].substring(reg0.lastIndex) //omitting .
            
        }
        console.log("expression3",expression3)

        expression[i]=expression3[0]+'@'+expression3[1]

        while ((array1 = reg0.exec(expression1[i])) !== null) { 
            expression1[i]=expression1[i].substring(0,reg0.lastIndex-1)+expression1[i].substring(reg0.lastIndex)
            
        }
       // expression[i]=expression1[i]+expression2[i]
}

console.log("expression1",expression1) //local
console.log("expression2",expression2) //global



//    for (i in expression){
//     var x=expression[i].match(reg2) // @
//     var y=expression[i].substring(0,x.index).match(reg0) // .
//     var z=expression[i].match(reg1) // +
    
//     console.log("x--",x)
//     console.log("y--",y)
//     console.log("z--",z)
    
//     // while ((array1 = reg0.exec(expression[i].substring(0,x.index))) !== null) {
//     //     console.log(`Found ${array1[0]}. Next starts at ${reg0.lastIndex}.`);
//     //     // expected output: "Found foo. Next starts at 9."
//     //     // expected output: "Found foo. Next starts at 19."

//     //   }
    
//     if(z) {
//         console.log("new z",i,expression[i].substring(0,z.index)+expression[i].substring(x.index))
//         expression[i]=expression[i].substring(0,z.index)+expression[i].substring(x.index)
//     }

//     var x1=expression[i].match(reg2) // @
//     var y1=expression[i].substring(0,x.index).match(reg0) // .

//     console.log("x1--",x1)
//     console.log("y1--",y1)

//     // if(y) {
//     //     console.log("new y",i,expression[i].substring(0,y.index)+expression[i].substring(y.index+1))
//     //     expression[i]=expression[i].substring(0,y.index)+expression[i].substring(y.index+1)
//     // }

//     while ((array1 = reg0.exec(expression[i].substring(0,x1.index))) !== null) {
//         console.log("new y",reg0.lastIndex,expression[i].substring(0,reg0.lastIndex-1)+expression[i].substring(reg0.lastIndex))
//         expression[i]=expression[i].substring(0,reg0.lastIndex-1)+expression[i].substring(reg0.lastIndex)
//     }


//    }

   console.log("expression",expression)

   expression.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    // for (i in expression){
    //     console.log("in for",expression)
    //     count=0
    //     var reg=new RegExp(expression[i])
    //     console.log("reg is",reg)

        
    //     for (j in expression){
    //         //var x=reg.test(expression[i])
    //         var x=expression[j].match(reg)
    //         console.log("x",j,x)
    //         if(x) {
    //             count=count+1
    //             expression.pop(j)
    //         }    
    //     }
    //     console.log("test",expression[i],counts)
    // }

    console.log("test",counts)
    console.log(Object.keys(counts).length)

   // console.log(expression.pop(3),expression)
   
    
    

