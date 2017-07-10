arr = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],   
]

function roman(num) {
    var romanStr = "";
    for (var i = 0; i < arr.length; i++) {
        while (num >= arr[i][0]) {
            romanStr += arr[i][1];
            num -= arr[i][0];
        }
    }
    return romanStr;
}

console.log(roman(2948));