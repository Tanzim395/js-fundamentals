var gotJob = false;
var moneySaved = 250000;
var hasFlat = false;
var hasHouse = true;


// if (gotJob == true && moneySaved > 200000) {
//     console.log('I Biya U!!!');
// }
// else {
//     console.log('Biya kortarti na');
// }
// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('I Biya U!!!');
// }
// else {
//     console.log('Biya kortarti na');
// }
// if (gotJob == true || moneySaved > 200000 && hasFlat == true) {
//     console.log('I Biya U!!!');
// }
// else {
//     console.log('Biya kortarti na');
// }

// Complexity
if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('Cholo biya kore feli!!');
}
else {
    console.log('Tor kopale biya nai!!!')
}