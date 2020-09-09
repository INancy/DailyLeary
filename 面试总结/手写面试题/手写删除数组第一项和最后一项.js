// 面试题1: 将数组第一项和最后一项删除
let arr = [1,2,3,4,5,6,7,8,9,10],
newArr  = [];
// 方法一：
//newArr = arr.slice(1,arr.length-1);
// 方法二：
/* for (let i = 1; i < arr.length-1; i++) {
    newArr.push(arr[i])
    
} */
console.log(arr.shift(),arr,arr.pop())
console.log(newArr);

