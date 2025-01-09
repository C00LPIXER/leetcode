/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
    let count = 0
    let n = batteryPercentages.length;
    for (let i=0;i<n;i++){
        if(batteryPercentages[i] > 0 && batteryPercentages[i] > count) {
            count++
        }
    }

    return count;
}