function forEach(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback.call(list[i], i);
    }
}

var weapons = [
    { type: 'sword', damage: 10 },
    { type: 'axe', damage: 12 },
    { type: 'bow', damage: 7 },
];

forEach(weapons, function (index) {
    console.log(weapons[index], " >> ", this === weapons[index],
        "Got the expected value of " + weapons[index].type);
});
// ---------------------------------------------------
// var arr = ['apple', 'banana', 'orange'];
// // arr.forEach(function (item, index) {// 0: apple
// arr.forEach(function (index) {// apple
//     console.log(index);
// }); 
