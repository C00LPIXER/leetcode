/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const str = paragraph.toLowerCase();
    let array = [];
    let value = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            value += char;
        } else {
            if (value) {
                array.push(value);
                value = '';
            }
        }
    }

    if (value) {
        array.push(value);
    }

    let frequency = {}
    for (const word of array) {
        frequency[word] = (frequency[word] || 0) + 1;
    }

    if (banned.length !== 0) {
        for (const ban of banned) {
            if (frequency[ban]) {
                delete frequency[ban];
            }
        }
    }

    let max = 0;
    let re = ''
    for (const hig in frequency) {
        if (frequency[hig] > max) {
            re = hig;
            max = frequency[hig];
        }
    }

    return re
};