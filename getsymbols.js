/**
 * 给定一个偶数
 * 比如六
 * 生成类似下面的字符串: ()()()
 * 要求，左括号右边一定有对应的有括号 比如这样也是可以的()(())
 * 但是不能是 )(，也就是说，有括号一定是在左括号后面
 * @param {*} number 数量
 * @param {*} sumOnly 是否只获取数量，如果这样的话 arr只有一个数，就是总数，否则就是所有的结果
 * @param {*} left 
 * @param {*} right 
 * @param {*} str 
 * @param {*} arr 
 */
function getSynbols(number, sumOnly, left, right, str, arr) {
    arr = arr == undefined ? (sumOnly ? [0] : []) : arr;
    left = left || 0;
    right = right || 0;
    str = str || '';
    let half = number / 2;
    if (right + left == number) {
        if (sumOnly) {
            arr[0]++;
        } else {
            arr.push(str);
        }
    } else {
        if (number % 2 == 0) {
            if (left < half) {
                getSynbols(number, sumOnly, left + 1, right, str + "(", arr);
                if (left > 0 && right < left) getSynbols(number, sumOnly, left, right + 1, str + ")", arr);
            } else {
                getSynbols(number, sumOnly, left, right + 1, str + ")", arr);
            }
        } else {
            console.log("请输入一个偶数");
        }
    }
    return arr;
};
module.exports = getSynbols;