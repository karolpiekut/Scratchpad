function spinalCase(str) {
    let str2 = str.split(/[A-Z]/g);
    return str2.join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap AllThe-small Things'));