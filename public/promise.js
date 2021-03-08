function printDouble(number) {
    return new Promise(function(resolve){
      setTimeout(function(){
        const double = number * 2
        console.log(double)
        resolve(double)
      }, Math.floor(Math.random() * 100) + 1)
    })
  }
   

async function printAll1() {
   printDouble(5).then(function(){
      printDouble(10).then(function(){
        printDouble(15).then(function(){
          printDouble(20).then(function(){
            printDouble(25)
          })
        })
      })
   })
}
/*printAll1()*/

function sumNumbers(number, number2){
  return new Promise(function(resolve){
    setTimeout(function(){
        const sum = (number * 2) + number2
        console.log(sum)
        resolve(sum)
    }, Math.floor(Math.random() * 100) + 1)
  })
}

async function printAll2() {
  let result;

  result = sumNumbers(5,0).then(function(result){
    result = sumNumbers(12,result).then(function(result){
      result = sumNumbers(2,result).then(function(){
      })
    })
  })
  
}
printAll2()