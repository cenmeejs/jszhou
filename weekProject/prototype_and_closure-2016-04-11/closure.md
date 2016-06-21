## 闭包（closure）
#####引用 Douglas Crockford [1] :
>在 JavaScript 中实现公有，私有，特权变量正是因为闭包，闭包是指在 JavaScript 中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。

* 闭包定义
    * 父函数包含子函数
    * 其中子函数被外部应用，这样的子函数叫闭包
* 闭包的用途
    * 可以读取父函数内部的自由变量
    * 让这些变量的值始终保持在内存中
* 闭包实例

                    function Counter() {
                        var count = 4;
                        return function(){
                            console.log(count)
                            count++
                        };
                    }
                    var log = Counter()


* 循环中的闭包
    * 一个常见的错误出现在循环中使用闭包，假设我们需要在每次循环中调用循环序号


                for(var i = 0; i < 10; i++) {
                    setTimeout(function() {
                        console.log(i);
                    }, 1000);
                }
* 循环中的闭包
    * 为了正确的获得循环序号，最好使用 匿名包装器（译者注：其实就是我们通常说的自执行匿名函数）。



                for(var i = 0; i < 10; i++) {
                    setTimeout((function(e) {
                        return function() {
                            console.log(e);
                        }
                    })(i), 1000)
                }