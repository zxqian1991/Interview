/**
 * 获取一个对象的深度
 * @param {*} obj 
 */
function getDeps(obj,parents) {
    if(parents == true) {
        parents = [];
    }
    if (obj && obj instanceof Object && !(obj instanceof Array) && (!parents || parents.indexOf(obj) < 0)) {
        let max = null;
        let flag = false;
        for (let key in obj) {
            let dep = getDeps(obj[key],!parents ? parents : parents.concat(obj)) + 1;
            if (!flag) {
                flag = true;
                max = dep
            } else {
                max = max < dep ? dep : max;
            }
        }
        return max;
    } else {
        return 0;
    }
};
module.exports = getDeps;