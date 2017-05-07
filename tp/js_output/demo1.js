var x = ['aa', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
var colorName = Color[2];
console.log(colorName);
