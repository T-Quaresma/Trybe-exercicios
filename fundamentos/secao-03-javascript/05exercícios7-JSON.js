function cataAndMouse (mouse, cat1, cat2) {
    if (cat1 < mouse && cat1 > cat2) {
        return "cat1"
    } else if (cat1 < mouse && cat1 < cat2) {
        return "cat2"
    } else {
        return "Os gatos trombam e o rato foge"
    }
}

console.log(cataAndMouse(10, 7, 8));
console.log(cataAndMouse(10, 8, 8));
console.log(cataAndMouse(20, 14, 8));



