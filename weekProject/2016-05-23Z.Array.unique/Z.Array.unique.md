#  数组去重
## 思路一：
1. 双层循环，外层循环元素，内层循环时比较值
2. 如果有相同的值则跳过，不相同则push进数组
```
    function unique(arr){
        var result = [],
            i,
            j,
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
    console.log(unique([1,2,3,4,4,1,1,2,1,1,1]));
```