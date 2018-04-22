function pluralize(num, word) {
    if (num > 1) {
        console.log(`${num} ${word}s`)
    } else { console.log(`${num} ${word}`)}
}
console.log(pluralize(1, "rose"));