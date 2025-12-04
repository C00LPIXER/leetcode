/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let items = s.split(" ");

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length - 1; j++) {
            let a = items[j][items[j].length - 1];
            let b = items[j + 1][items[j + 1].length - 1];
            if (b < a) {
                [items[j], items[j + 1]] = [items[j + 1], items[j]];
            }
        }
    }

    let result = "";
    let len = items.length - 1;
    for (let j = 0; j < items.length; j++) {
        let concat = len == j ? "" : " ";
        result += items[j].substring(0, items[j].length - 1)+ concat;
    }

    return result;
};