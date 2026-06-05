const pLiberi = [2, 0, 4, 7, 12, 8];
let nPass = Number(prompt("Quanti posti hai bisono per l'intero gruppo?"));


for (let i = 0; i < pLiberi.length; i++) {
    if (pLiberi[i] > nPass)
        console.log((`La carrozza numero ${i} è perfetta per voi`));
    else
        console.log(`Siete troppi per la carrozza numero ${i}`);
}