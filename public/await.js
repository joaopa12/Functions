function printDouble(number) {
    return new Promise(function (resolver) {
        setTimeout(function () {
            resolver(console.log(number * 2))
        }, 0)
    })
}


async function printAll() {
       await printDouble(5),
       await printDouble(10),
       await printDouble(15),
       await printDouble(20)
}

printAll()