function printDouble(number, callback){ 
    setTimeout(
       function(){
            let double = number * 2
            callback( null, double )
       },
       Math.floor(Math.random() * 1000) + 1
    )
}

function printAll1(){
    printDouble(5 , function (error, double) {
        if (error) {
            console.log(error)
        }
        console.log(double)
        printDouble(10 , function (error, double) {
            if (error) {
                console.log(error)
            }
            console.log(double)
            printDouble(15 , function (error, double) {
                if (error) {
                    console.log(error)
                }
                console.log(double)
                printDouble(20 , function (error, double) {
                    if (error) {
                        console.log(error)
                    }
                    console.log(double)
                    printDouble(25 , function (error, double) {
                        if (error) {
                            console.log(error)
                        }
                        console.log(double)
                    }) 
                }) 
            }) 
        }) 
    }) 
}

/*printAll1()*/

function sumNumber(number,number2,callback){ 
    const sumNumber = (number * 2) + number2
    setTimeout(
       function(){
            console.log(sumNumber)
            callback( null, sumNumber )
       },
       Math.floor(Math.random() * 100) + 1
    )
}

function printAll2(){
    let result;

    result = sumNumber(5,0,function(error,result){
        if (error) {
            console.log(error)
        }
        result = sumNumber(12,result,function(error,result){
            if (error) {
                console.log(error)
            }

            result = sumNumber(2,result,function(error,result){
                if (error) {
                    console.log(error)
                }
            })
        })
    })
}

printAll2()