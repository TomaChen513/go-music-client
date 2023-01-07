var Color;
(function (Color) {
    Color["Red"] = "123";
    Color["Green"] = "234";
    Color["Blue"] = "445";
})(Color || (Color = {}));
var colorName = Color.Red;
console.log(colorName);
fn();
function fn() {
    console.log('fn()');
    // return undefined
    // return null
    // return 1 // error
}
function info(x) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(x, args);
}
info('abc', 'c', 'b', 'a');
