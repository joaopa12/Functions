function sequence(random){
     if (random >= random) {
          return randomx
     }
 } 

function printDouble(number){
     let random = Math.floor(Math.random() * 100) + 1
     
     sequence(random)
      
     setTimeout(
        function(){
             console.log(number * 2)
        },
        random
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
/* Math.floor(Math.random() * 100) + 1 */
