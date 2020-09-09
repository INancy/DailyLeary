let arr = [1,1,'1','1'];
function unique(arr) {
    // res 存储结果
    var res = [];
    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if( arr[i] === res[j] ) {
                break
            }
        }
        // 如果arr[i]是唯一的，执行完循环，j等于resLen
        if( j === resLen ) {
            console.log(j,'1')
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(unique(arr))