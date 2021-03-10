function printDouble(number){
     let random = Math.floor(Math.random() * 100) + 1
      
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

/*printAll()*/

const Mask = {
     apply(input,func){
          input.value = Mask[func](input.value)
     },
     Percent(value){
          value = value.replace(/\D/g, "")

          return value = new Intl.NumberFormat('pt-br',{
               maximumSignificantDigits: 4,
               minimumSignificantDigits: 2,
               style:"percent",
               currency:"BRL"
          }).format(value/10000)
     }
}