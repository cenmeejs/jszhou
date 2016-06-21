/**
 * Created by jszhou on 2016/5/20.
 */
var Z = Z || {};

Z.Array = Z.Array || {};

/**
 * 数组去重
 * @type{array}
 */
function unique(arr){
    //获得数组去重的时间间隔
    function getTimeInterval(fn,title){
        var startTime = Date.now();
        fn();
        console.log(title,Date.now() - startTime)
    }



    /**
     * 思路一：
     * 1.双层循环，外层循环元素，内层循环时比较值
     * 2.如果有相同的值则跳过，不相同则push进数组
     */
    function unique1(){
        var i,
            j,
            result = [],
            len = arr.length;
        for(i = 0; i < len; i++){
            for(j = i + 1; j < len; j++){
                if(arr[i] === arr[j]){
                    j = ++i;//如果有相同的值,则绕过外层，直接跳到下一个外层循环的内层循环
                }
            }
            result.push(arr[i]);
        }
        return result;
    }



    /**
     * 思路二：利用对象的属性不能相同的特点进行去重
     */
    function unique2(){
        var i,
            obj = {},
            result = [],
            len = arr.length;
        for(i = 0; i < len; i++){
            if(!obj[arr[i]]){ //如果能查找到，证明数组元素重复了
                obj[arr[i]] = 1;
                result.push(arr[i]);
            }
        }
        return result;
    }



    /**
     * 思路三：利用indexOf以及forEach
     */
    function unique3(){
        var result = [];
        arr.forEach(function(v){ //这里利用map，filter方法也可以实现
            var bool = result.indexOf(v);
            if(bool === -1){
                result.push(v)
            }
        });
        return result;
    }


    /**
     * 思路四,五：利用ES6的set
     * 1.Set数据结构，它类似于数组，其成员的值都是唯一的
     * 2.扩展运算符（...）内部使用for...of循环
     * 3.Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
     */
    // function unique4(){
    //     return [...new Set(arr)];
    // }

    function unique5(){
        return Array.from(new Set(arr));
    }



    /**
     * 思路六:Ext.js 中的数组去重
     */
    function unique6(){
        var i,
            result = [],
            len = arr.length;
        for (i = 0; i < len; i++) {
            if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }
        return result;
    }


    /**
     * 思路七:数组下标判断法
     */
    function unique7(){
        var i,
            result = [arr[0]],
            len = arr.length;
        for(i = 1; i < len; i++){
            if(arr.indexOf(arr[i]) === i){
                result.push(arr[i])
            }
        }
        return result;
    }




    /**
     * 思路八：数组递归去重
     * 1.运用递归的思想
     * 2.先排序，然后从最后开始比较，遇到相同，则删除
     */
    function unique8(){
        var len = arr.length;
        arr.sort(function(a,b){ //先排序
            return a-b;
        });
        function loop(index){
            if(index < 1){
                return;
            }
            if(arr[index] === arr[index-1]){
                arr.splice(index,1);
            }
            loop(index-1)
        }
        loop(len-1);
        return arr;
    }




    /**
     * 思路九：利用splice直接在原数组进行操作（array.splice(index,howmany,item1,.....,itemX)）
     * 1.双层循环，外层循环元素，内层循环时比较值
     * 2.值相同时，则删去这个值
     * 注意点:删除元素之后，需要将数组的长度也减1.
     * 优点：简单易懂
     * 缺点：占用内存高，速度慢
     */
    function unique9(){
        var i,
            j,
            len = arr.length;
        for(i = 0; i < len; i++){
            for(j = i + 1; j < len; j++){
                if(arr[i] == arr[j]){
                    arr.splice(j,1);
                    len--;
                    j--;
                }
            }
        }
        return arr;
    }


    //数组去重时间间隔
    getTimeInterval(unique2,'2:');
    //getTimeInterval(unique4,'4:');
    getTimeInterval(unique5,'5:');
    getTimeInterval(unique3,'3:');
    getTimeInterval(unique6,'6:');
    getTimeInterval(unique7,'7:');
    getTimeInterval(unique1,'1:');
    getTimeInterval(unique9,'9:');
}
var arr = [];
for(var i = 0; i < 10000000; i++){
    arr.push(Math.floor(Math.random()*1000))
}
console.log(unique(arr));

Z.Array.unique = unique;

