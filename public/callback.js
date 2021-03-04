function printDouble(number, callback){ 
    setTimeout(
       function(){
            callback( null, number * 2 )
       },
       0
    )
    console.log(
        `O dobro do numero ${number}`
    )
}

function printAll(){
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

printAll()