const oreS = [40, 35, 45, 38, 42];
const price = 15;
const ore = 40;
let totS = 0;
let difo = 0;


for (let i = 0; i < oreS.length; i++) {
    if (oreS[i] <= ore)
        totS = totS + oreS[i] * price;
    else {
        difo = oreS[i] - ore;
        totS = totS + (ore * price) + (difo * (price + 5));
    }
}

console.log(`Lo stipendio totale settimanale è ${totS}`);