/**
 * 获取一个对象的深度
 * @param {*} obj 
 */
function getDeps(obj) {
    if (obj && obj instanceof Object && !(obj instanceof Array)) {
        let max = null;
        let flag = false;
        for (let key in obj) {
            let dep = getDeps(obj[key]) + 1;
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