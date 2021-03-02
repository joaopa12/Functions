function printDouble(number){
     setTimeout(
        function(){
             console.log(number * 2)
        },
        Math.floor(Math.random() * 100) + 1
     )
}

function printAll(){
     printDouble(5)
     printDouble(10)
     printDouble(20)
     printDouble(15)
     printDouble(90)
}

printAll()

