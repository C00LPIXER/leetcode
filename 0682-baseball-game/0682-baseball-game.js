/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];
    
    for (let op of operations) {
        if (!isNaN(op)) {
            record.push(parseInt(op));
        } else if (op === 'C') {
            record.pop();
        } else if (op === 'D') {
            record.push(2 * record[record.length - 1]);
        } else if (op === '+') {
            record.push(record[record.length - 1] + record[record.length - 2]);
        }
    }
    
    return record.reduce((a, b) => a + b, 0);
};