/**
 * Created by jszhou on 2016/5/17.
 */
var i = 0;
var el = document.createElement('div');
el.createAttribute('id','you');
document.body.appendChild(el);
function fun(){
    el.innerHTML('welcome o my app.js'+i);
    ++i
}
setInterval(fun,1000);

//alert('nihao');
console.log('app loaded');

