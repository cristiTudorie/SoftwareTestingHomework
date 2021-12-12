
function sum(x, y) {
    return x + y;
}


function test(x, y) {
    console.log(`The sum function returns ${sum(x, y)}`)
    console.log(`The expected result should be ${x + y}`)
    if(sum(x, y) !== x + y) {
        console.log(`The sum function is wrong.`)
    }
    else {
        console.log(`The sum function is right.`)
    }
}

test(10, 30)

//triggering webhookzzz
