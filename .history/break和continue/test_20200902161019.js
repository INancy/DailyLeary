/*
 * @Author: FengZiShuo
 * @Date: 2020-09-02 16:09:05
 * @LastEditors: FengZiShuo
 * @LastEditTime: 2020-09-02 16:10:19
 */
var num = 0;
for( var i = 1; i < 10; i++ ) {
    if( i % 5 == 0 ) {
        console.log(i)
        break;
    }
    num++
}
alert(num)