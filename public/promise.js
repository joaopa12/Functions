function printDouble(number) {
    return new Promise(function(resolver){
      setTimeout(function(){
        resolver(console.log(number * 2))
      }, 0)
    })
  }
  

async function printAll() {
   printDouble(5)
   printDouble(10)
   printDouble(15)
   printDouble(20)
}

printAll()