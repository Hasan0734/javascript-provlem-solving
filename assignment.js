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
console.log("Your total wood needed ", needTotalWood, "Qbit Feet");

// 3. Brick Calculator

function brickCalculator(tala) {
    var totalBrick = 0;
    if (tala <= 10) {                                           // 1 to 10 tala 15 feet & per feet brick needed 1000
        var firstTen = tala * 15000;
        totalBrick = firstTen;

    }
    else if (tala <= 20) {                                      // 11 to 20 tala 12 feet & per feet brick needed 1000
        var tenTala = 10 * 15000;
        var remainTala = tala - 10;
        var twentyTala = remainTala * 12000;
        totalBrick = twentyTala + tenTala;
    }
    else {                                                        // 21 to random number 10 feet  & per feet brick neeede 1000
        var tenTala = 10 * 15000;
        var twentyTala = 10 * 12000;
        var remainTala = tala - 20;
        var upToTwentyTala = remainTala * 10000;
        totalBrick = upToTwentyTala + tenTala + twentyTala;
    }
    return totalBrick;
}

var result = brickCalculator(5);
console.log(result);

// 4. Tyne Friend

function tyneFriend(friendsName) {
    var sortName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (sortName.length == 0) {
            sortName = friendsName[i];
        }
        if (friendsName[i].length < sortName.length) {
            sortName = friendsName[i];
        }
    }
    return sortName;
}
var friendsName = ["Jahid", "Nasir", "Mia", "Arafat", "Muhmudul", "Rasel Ahamed"];
var smallName = tyneFriend(friendsName);

console.log(smallName);


