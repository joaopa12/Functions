function printDouble(number) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(console.log(number * 2))
        }, Math.floor(Math.random() * 100) + 1)
    })
}

async function printAll1() {
       await printDouble(5);
       await printDouble(10);
       await printDouble(15);
       await printDouble(20);
}

/*printAll1()*/

function sumNumbers(number,number2){
    return new Promise(function(resolve){
        setTimeout(function(){
            const sum = (number * 2) + number2
            console.log(sum)
            resolve(sum) 
        }, Math.floor(Math.random() * 100) + 1)
    })
}

async function printAll2(){
    let result;

    result = await sumNumbers(5,0)
    result = await sumNumbers(12,result)
    result = await sumNumbers(2,result)
}

printAll2()