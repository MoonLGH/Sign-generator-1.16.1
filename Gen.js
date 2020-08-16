const rl = require("readline-sync");
const chalk = require("chalk");
const fs = require("fs");
const { OPENSSL_VERSION_NUMBER } = require("constants");
let none = " change this crack to password if u wanna use premium account";
let T1,
    T2,
    T3,
    T4,
    Cmdrun,
    Nama;

Nama = rl.question("Nama Sign : ")
console.clear();
T1 = rl.question("Text 1 : ");
console.clear();
T2 = rl.question("Text 2 : ");
console.clear();
T3 = rl.question("Text 3 : ");
console.clear();
T4 = rl.question("Text 4 : ");
console.clear();
Cmdrun = rl.question("Kalau di klik kanan pengen mengeluarkan command apa : ")

if (Nama == ""){
    console.clear();
    let Nama = (`Made By MoonLMC`)
console.log("Prosessing...")

let Item = ("minecraft:oak_sign");
let Text1 = (`{BlockEntityTag:{Text1:'{"text":"${T1}",`)
let ClickE = (`"clickEvent":{"action":"run_command","value":"${Cmdrun}"}}',`)
let Text2 = (`Text2:'{"text":"${T2}"}',`)
let Text3 = (`Text3:'{"text":"${T3}"}',`)
let Text4 = (`Text4:'{"text":"${T4}"}'},`)
let NameI = (`display:{Name:'{"text":"${Nama}"}'}}`)

console.log( chalk.red(`karena kamu tidak memilih nama akan Nama akan menjadi Default`))
console.log();
console.log(chalk.red (`Nama Sign = `)+ (`${Nama} `))
console.log(chalk.yellow(`Line 1 = `)+ (`${T1}`))
console.log(chalk.green(`Line 2 = `) + (`${T2}`))
console.log(chalk.blue(`Line 3 = `)+ (`${T3}`))
console.log(chalk.cyan(`Line 4 = `)+ (`${T4}`))
console.log(chalk.white(`Kalau di klik kanan akan = ${Cmdrun}`))


if (rl.keyInYNStrict("Apakah Benar ? ")) {
	console.clear();
    console.log( chalk.blue(`Command = `) + ` Copy ` + chalk.magenta(`/give @p ${Item}${Text1}${ClickE}${Text2}${Text3}${Text4}${NameI}`))
    console.log();
    rl.keyInPause("End Of The Command.");
    console.clear();
} else {
	rl.keyInPause("OK. Cancelling...");
}



} else {
console.clear();

console.log("Prosessing...")
console.log();
console.log("Prosessing..")
console.log();
console.log("Prosessing.")
console.clear();

let Item = ("minecraft:oak_sign");
let Text1 = (`{BlockEntityTag:{Text1:'{"text":"${T1}",`)
let ClickE = (`"clickEvent":{"action":"run_command","value":"${Cmdrun}"}}',`)
let Text2 = (`Text2:'{"text":"${T2}"}',`)
let Text3 = (`Text3:'{"text":"${T3}"}',`)
let Text4 = (`Text4:'{"text":"${T4}"}'},`)
let NameI = (`display:{Name:'{"text":"${Nama}"}'}}`)



console.log(chalk.red (`Nama Sign = `)+ (`${Nama} `))
console.log(chalk.yellow(`Line 1 = `)+ (`${T1}`))
console.log(chalk.green(`Line 2 = `) + (`${T2}`))
console.log(chalk.blue(`Line 3 = `)+ (`${T3}`))
console.log(chalk.cyan(`Line 4 = `)+ (`${T4}`))
console.log(chalk.white(`Kalau di klik kanan akan = ${Cmdrun}`))


if (rl.keyInYNStrict("Apakah Benar ? ")) {
	console.clear();
    console.log( chalk.blue(`Command = `) + ` Copy ` + chalk.magenta(`/give @p ${Item}${Text1}${ClickE}${Text2}${Text3}${Text4}${NameI}`))
    console.log();
    rl.keyInPause("End Of The Command.");
    console.clear();
} else {
	rl.keyInPause("OK. Cancelling...");
}

}