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
          setTimeout(function(){
               input.value = Mask[func](input.value)
          }, 1)
     },
     Percent(value){
          value = value.replace(/\D/g, "")

          return value = new Intl.NumberFormat('pt-br',{
               maximumFractionDigits: 4,
               minimumFractionDigits:2,
               style:"percent",
               currency:"BRL"
          }).format(value/10000)
     },
     Cpf(value){
          value = value.replace(/\D/g, "")

          value = value.replace(/(\d{3})(\d)/, "$1.$2")
          value = value.replace(/(\d{3})(\d)/, "$1.$2")
          value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2")
          value = value.replace(/(-\d{2})\d+?$/, "$1")

          return value
      }
}