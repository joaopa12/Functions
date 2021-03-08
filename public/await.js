function printDouble(number) {
    return new Promise(function (resolver) {
        setTimeout(function () {
            resolver(console.log(number * 2))
        }, Math.floor(Math.random() * 100) + 1)
    })
}


async function printAll1() {
       await printDouble(5);
       await printDouble(10);
       await printDouble(15);
       await printDouble(20);
}

printAll1()

function sumNumbers(number,number2){
    return new Promise(function(resolver){
        setTimeout(function(){
            const sum = (number * 2) + number2
            console.log(sum)
            resolver(sum) 
        }, Math.floor(Math.random() * 100) + 1)
    })
}

async function printAll2(){
    await sumNumbers(5,10)
    await sumNumbers(10,15)
    await sumNumbers(20,25)
}

/*printAll2()*/