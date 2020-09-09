let arr = [3,1,5,7,2,4,9,6,10,8];
// 冒泡排序
/* function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if(  arr[j] > arr[ j + 1 ]) {
                var swap = arr[j];
                arr[j] = arr[ j+1 ];
                arr[ j + 1 ] = swap;
            }
            console.log(arr, '111')
        }
        
    }
    return arr
} */

// 插入排序
/* function insertSort(arr) {
    let left = arr.slice(0,1);
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        console.log(cur)
        for (let j = left.length - 1; j >=0;) {
            let nex = left[j];
            console.log('nex', nex,[j])
            if( cur < nex ) {
                j--;
                if( j === -1) {
                    left.unshift(cur);
                }
            }else {
                left.splice( j+1, 0, cur );
                console.log('left',left)
                break;
            }
        }
    }
    return left;
} */

// 快速排序
function quickSort(arr) {
    if(!Array.isArray(arr)) return;
    if(arr.length <= 1){
        return arr;
    }
    let num = Math.floor(arr.length/2);
    let numVal = arr.splice(num,1)[0];
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > numVal) {
            right.push(arr[i]);
        }else {
            left.push(arr[i]);
        }
    }
    console.log('left:',left,'right:', right,numVal)
    return [...quickSort(left),numVal,...quickSort(right)]
}
console.log(quickSort(arr));