function printDouble(number) {
    return new Promise(function(resolver){
      setTimeout(function(){
        resolver(console.log(number * 2))
      }, 0)
    })
  }
   

async function printAll1() {
   printDouble(5)
   printDouble(10)
   printDouble(15)
}
/*printAll1()*/

function sumNumbers(number, number2){
  return new Promise(function(resolver){
    setTimeout(function(){
        const sum = (number * 2) + number2
        console.log(sum)
        resolver(sum)
    }, 250)
  })
}

async function printAll2() {
  let result;

  result = sumNumbers(5,10)
  result = sumNumbers(10,20)
  result = sumNumbers(20,40)
}
printAll2()