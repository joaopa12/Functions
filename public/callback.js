function printDouble(number, callback){ 
    setTimeout(
       function(){
            callback( null, number * 2 )
       },
       Math.floor(Math.random() * 100) + 1
    )
    console.log(
        `O dobro do numero ${number}`
    )
}

function printAll1(){
    printDouble(5 , function (error, number) {
        if (error) {
            console.log(error)
        }
        console.log(number)
    }) 
    printDouble(10 , function (error, number) {
        if (error) {
            console.log(error)
        }
        console.log(number)
    }) 
    printDouble(15 , function (error, number) {
        if (error) {
            console.log(error)
        }
        console.log(number)
    })
    printDouble(20 , function (error, number) {
        if (error) {
            console.log(error)
        }
        console.log(number)
    })  
}

/*printAll1()*/

function sumNumber(number,number2,callback){ 
    const sum = (number * 2) + number2
    setTimeout(
       function(){ 
            callback( null, sum )
       },
       0
    )
    console.log(
        `O dobro do numero ${number} mais ${number2} é igual a ${sum}`
    )
}

function printAll2(){
    sumNumber(2,4,function(error, sum){
        if (error) {
            console.log(error)
        }
        console.log(
            `Resultado é ${sum}`
        )
    })
}

printAll2()