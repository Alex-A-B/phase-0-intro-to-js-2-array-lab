// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const moreCats = [...cats, "Broom"];
    return moreCats;
}

function prependCat(name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat() {
    const byeLastCat = cats.slice(0, cats.length -1);
    return byeLastCat;
}

function removeFirstCat() {
    const byeFirstCat = cats.slice(1);
    return byeFirstCat;
}