// 1. Feet to Mile
function feetToMile(feet) {
    var mile = feet / 5280;  // 1 miles = 5280 Feet

    return mile;
}
var feet = 5280;
var result = feetToMile(feet);
console.log(result, " Mile");

// 2. Wood Calculator

function woodCalculator(chair, table, khat) {
    var totalWood = ((chair * 1) + (table * 3) + (khat * 5));  //1 chair = 1 qbit Feet, 1 table = 3 qbit Feet, khat = 5 qbit Feet
    return totalWood;
}
var needTotalWood = woodCalculator(2, 2, 1);
console.log("Your total wood nened ", needTotalWood, "Qbit Feet");

3. Brick Calculator

function brickCalculator(tala) {
    if (tala <= 10 && tala > 0 || tala == 0) {                 // 1 to 10 tala 15 feet & per feet brick needed 1000
        var brick = 15 * 1000;
        var totalBrick = tala * brick;
        return totalBrick;
    }
    else if (tala <= 20) {                                      // 11 to 20 tala 12 feet & per feet brick needed 1000
        var brick = 12 * 1000;
        var totalBrick = tala * brick;
        return totalBrick;
    }
    else{                                                        // 21 to random number 10 feet  & per feet brick neeede 1000
        var brick = 10 * 1000;
        var totalBrick = tala * brick;
        return totalBrick;
    }

}

var totalBrick = brickCalculator(100);
console.log(totalBrick);

4. Tyne Friend

function tyneFriend(frindsName) {
    var min = 0;
    for (let i = 0; i < frindsName.length; i++) {
        const element = frindsName[i];
        
        if (element < min) {
            element = min;
        }
    }
    return min
}
var frindsName = [20, 32, 54, 69, 52, 16];
var result = tyneFriend(frindsName)

console.log(result)


