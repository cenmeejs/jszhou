## 原型（prototype）
* 每个函数function都有一个prototype，即原型
* 每个对象都有一个__proto__，即隐式原型，指向创建该对象的函数的prototype
* Object.prototype的__proto__指向的是null
* instanceof的判断规则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false
* instanceof表示的就是一种继承关系，或者原型链的结构
* 访问一个对象的属性时，先在基本属性中查找，如果没有，再沿着__proto__这条链向上找，这就是原型链
* javascript除了全局作用域之外，只有函数可以创建作用域