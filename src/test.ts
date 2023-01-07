enum Color {
    Red="123",
    Green="234",
    Blue="445"
}

let colorName: string=Color.Red

console.log(colorName)
fn()

function fn(): void {
    console.log('fn()')
    // return undefined
    // return null
    // return 1 // error
}

function info(x: string, ...args: string[]) {
    console.log(x, args)
}
info('abc', 'c', 'b', 'a')