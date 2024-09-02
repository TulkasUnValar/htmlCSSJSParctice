console.log("Hello, world!");

let height;
console.log("height");
console.log("weight");

const rose = 8;
const lily = 10;
const tulip = 2;

let numberRoses = 70;
let numberLilies = 50;
let numberTulips = 120;

let valRoses = rose * numberRoses;
let valLilies = lily * numberLilies;
let valTulips = tulip * numberTulips;
let total = valRoses + valLilies + valTulips;

console.log("Rose - unit price: ", rose, "quantity: ", numberRoses,", value: ", valRoses);
console.log("Lily - unit price: ", lily, "quantity: ", numberLilies,", value: ", valLilies);
console.log("Rose - unit price: ", tulip, "quantity: ", numberTulips,", value: ", valTulips);
console.log("Total value: ", total);

numberRoses = numberRoses - 20;
numberLilies = numberLilies -30;

valRoses = rose * numberRoses;
valLilies = lily * numberLilies;
valTulips = tulip * numberTulips;
total = valRoses + valLilies + valTulips;

console.log("Rose - unit price: ", rose, "quantity: ", numberRoses,", value: ", valRoses);
console.log("Lily - unit price: ", lily, "quantity: ", numberLilies,", value: ", valLilies);
console.log("Rose - unit price: ", tulip, "quantity: ", numberTulips,", value: ", valTulips);
console.log("Total value: ", total);

let name1 = "Maxwell Wright";
let phone1 = "(0191) 719 6495";
let email1 = "curabitur.egestas.nunc@nonummyac.co.uk";
let name2 = "Raja Villarreal";
let phone2 = "0866 398 2895";
let email2 = "posuere.vilputate@sed.com";
let name3 = "Helen Richards";
let phone3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log("Name: ", name1, "phone: ", phone1, "email: ", email1);
console.log("Name: ", name2, "phone: ", phone2, "email: ", email2);
console.log("Name: ", name3, "phone: ", phone3, "email: ", email3);

/* Conversion to string*/
let str = "text";
let strStr = String(str);
console.log(`${typeof str} : ${str}`); // -> string : text
console.log(`${typeof strStr} : ${strStr}`); // -> string : text

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr} : ${nr}`); // -> number : 42
console.log(`${typeof strNr} : ${strNr}`); // -> string : 42

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl} : ${bl}`); // -> boolean : true
console.log(`${typeof strBl} : ${strBl}`); // -> string : true

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr} : ${bnr}`); // -> bigint : 123
console.log(`${typeof strBnr} : ${strBnr}`); // -> string : 123

let un = undefined;
let strUn = String(un);
console.log(`${typeof un} : ${un}`); // -> undefined : undefined
console.log(`${typeof strUn} : ${strUn}`); // -> string : undefined

let n = null;
let strN = String(n);
console.log(`${typeof n} : ${n}`); // -> object : null
console.log(`${typeof strN} : ${strN}`); // -> string : null

/* Conversion to number */
console.log(Number(42)); // -> 42

console.log(Number("11")); // -> 11
console.log(Number("0x11")); // -> 17
console.log(Number("0o11")); // -> 9
console.log(Number("0b11")); // -> 3
console.log(Number("12e3")); // -> 12000
console.log(Number("Infinity"));// -> Infinity
console.log(Number("text")); // -> NaN

console.log(Number(14n)); // -> 14
console.log(Number(123456789123456789123n)); // - > 123456789123
456800000

console.log(Number(true)); // -> 1
console.log(Number(false)); // -> 0

console.log(Number(undefined)); // -> NaN

console.log(Number(null));// -> 0

/* Conversion to boolean */
console.log(Boolean(true)); // -> true

console.log(Boolean(42)); // -> true
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false

console.log(Boolean("text")); // -> true
console.log(Boolean("")); // -> false

console.log(Boolean(undefined)); // -> false

console.log(Boolean(null)); // -> false

/* Conversion ti Bigint */
console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n

console.log(BigInt(true)); // -> 1n

console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n

console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt

console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

/* Implicit conversions */
const str1 = 42 + "1";
console.log(str1); // -> 421
console.log(typeof str1); // -> string

const str2 = 42 - "1";
console.log(str2); // -> 41
console.log(typeof str2); // -> number

/* |||||||||||||||| */

let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 1;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1;

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);