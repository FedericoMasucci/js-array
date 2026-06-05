const prod = ["Latte", "Pane", "Uova", "Riso", "Pasta"];
const qta = [12, 0, 3, 25, 4];

for (let i = 0; i <= prod.length; i++) {
    if (qta[i] === 0) {
        console.log(`${prod[i]} ha ESAURITO le scorte`);
    } else if (qta[i] < 5) {
        console.log(`Hai SCORTE BASSE di ${prod[i]}, solo ${qta[i]}`);
    }
}