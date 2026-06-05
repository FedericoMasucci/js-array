const temp = [27, 28, 29, 29, 29, 30, 31, 28];
let max = 0;
let min = temp[0];
let media = 0;
let sum = 0;

for (let i = 0; i < temp.length; i++) {
    sum = sum + temp[i];
    if (temp[i] >= max) {
        max = temp[i];
    }
    if (temp[i] <= min)
        min = temp[i];
}

media = sum / temp.length;
console.log(`La temperatura più alta della settima è stata ${max}°,la temperatura minima è stata ${min}° e la temperatura media della settimana è ${media}° `)