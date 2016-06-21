

(function(){
	//1.isCompatible(other)使用能力检测来检查必要条件
	//2.$(id或HTMLObject)代替document.getElementById()
	//3.has(obj)检测是否获取到元素
	//4.addEvent(node,type,listener)添加事件和removeEvent(node,type,listener)移除事件
	//5.getElementsByClassName(className,tag,parent)实现getElementsByClassName()的功能
	//6.toggleDisplay(node,value)切换元素的可见性
	//7.insertAfter(node,referenceNode)插在指定元素的后面
	//8.removeChildren(parent)删除所有子节点
	//9.prependChild(parent,newChild)在第一个位置添加子节点
	//10.bindFunction(obj,func)让func中的this指向obj
	//11.getBrowserWindowSize()获取浏览器窗口宽高返回一个包含width和height属性的对象
	//12.arrMax(array)和arrMin(array)分别返回数组中的最大元素和最小元素
	//13.arrSort(array,direction)用快速排序法给数组排序，direction为"r"则降序其他为升序
	//14.wheel(obj,upfn,downfn)鼠标滚轮事件
	
	//Z命名空间
	if(!window.Z) { window["Z"] = {} }
	
	
	//1.isCompatible(other)使用能力检测来检查必要条件
	function isCompatible(other) {
		if( other === false
			|| !Array.prototype.push
			|| !Object.hasOwnProperty
			|| !document.createElement
			|| !document.getElementsByTagName
		){return false}
		return true;
	}
	Z["isCompatible"] = isCompatible;
	
	
	//2.$(id或HTMLObject)代替document.getElementById()
	function $(){
		var elements=[];
		//查找作为参数提供的所有元素
		for(var i=0;i<arguments.length;i++){
			var element=arguments[i];
			//如果该参数是一个字符串那假定它是一个id
			if(typeof element=="string"){
				element=document.getElementById(element);
			}
			//如果只提供一个参数则立即返回该参数
			if(arguments.length==1){
				return element;
			}
			//否则将他们添加到数组中
			elements.push(element);
		}
		//返回多个被请求元素的数组
		return elements;
	}
	Z["$"]=$;
	
	
	//3.has(obj)检测是否获取到元素
	function has(obj){
		if(!(obj=$(obj))){return false}
		return true;
	}
	Z["has"]=has;
	
	
	//4.addEvent(node,type,listener)添加事件和removeEvent(node,type,listener)移除事件
	//addEvent(node,type,listener)添加事件
	function addEvent(node,type,listener){
		//使用前面的方法检查兼容性以保证平稳退化
		if(!isCompatible()){return false}
		
		if(!has(node)){return false}
		
		if(node.addEventListener){
			//W3C的方法
			node.addEventListener(type,listener,false);
			return true;
		}else if(node.attachEvent){
			//MSIE的方法
			//让listener默认有一个window.event参数
			node["e"+type+listener]=listener;
			node[type+listener]=function(){
				node["e"+type+listener](window.event);
			}
			node.attachEvent("on"+type,node[type+listener]);
			return true;
		}
		
		//两种方法都不具备则返回false
		return false;
	}
	Z["addEvent"]=addEvent;
	
	//removeEvent(node,type,listener)移除事件
	function removeEvent(node,type,listener){
		if(!has(node)){return false}
		
		if(node.removeEventListener){
			//W3C的方法
			node.removeEventListener(type,listener,false);
			return true;
		}else if(node.detachEvent){
			//MSIE的方法
			node.detachEvent("on"+type,node[type+listener]);
			node[type+listener]=null;
			return true;
		}
		
		//两种方法都不具备则返回false
		return false;
	}
	Z["removeEvent"]=removeEvent;
	
	
	//5.getElementsByClassName(className,tag,parent)实现getElementsByClassName()的功能
	function getElementsByClassName(className,tag,parent){
		parent=parent||document;
		
		if(!(parent=$(parent))){return false}
		
		//查找所有匹配的标签
		var allTags=(tag=="*"&&parent.all)?parent.all:parent.getElementsByTagName(tag);
		var matchElements=[];
		
		//创建一个正则表达式。来判断className是否正确
		className=className.replace(/\-/g,"\\-");
		var reg=new RegExp("(^|\\s)"+className+"(\\s|$)");
		
		var element;
		//检测每个元素
		for(var i=0;i<allTags.length;i++){
			element=allTags[i]
			if(reg.test(element.className)){
				matchElements.push(element);
			}
		}
		
		//返回任何匹配的元素
		return matchElements;
	}
	Z["getElementsByClassName"]=getElementsByClassName;
	
	
	//6.toggleDisplay(node,value)切换元素的可见性
	function toggleDisplay(node,value){
		if(!(node=$(node))){return false}
		
		if(node.style.display!="none"){
			node.style.display="none";
		}else{
			node.style.display=value||"";
		}
		return true;
	}
	Z["toggleDisplay"]=toggleDisplay;
	
	
	//7.insertAfter(node,referenceNode)插在指定元素的后面
	function insertAfter(node,referenceNode){
		if(!(node=$(node))){return false}
		if(!(referenceNode=$(referenceNode))){return false}
		return referenceNode.parentNode.insertBefore(node,referenceNode.nextSibling);
	}
	Z["insertAfter"]=insertAfter;
	
	
	//8.removeChildren(parent)删除所有子节点
	function removeChildren(parent){
		if(!(parent=$(parent))){return false}
		
		//当存在子节点时删除该子节点
		while(parent.firstChild){
			parent.removeChild(parent.firstChild);
		}
		
		//再返回父元素，以便实现方法连缀
		return parent;
	}
	Z["removeChildren"]=removeChildren;
	
	
	//9.prependChild(parent,newChild)在第一个位置添加子节点
	function prependChild(parent,newChild){
		if(!(parent=$(parent))){return false}
		if(!(newChild=$(newChild))){return false}
		
		if(parent.firstChild){
			//如果存在一个子节点，则在这个子节点之前插入
			parent.insertBefore(newChild,parent.firstChild);
		}else{
			//如果没有字节点则直接添加
			parent.appendChild(newChild);
		}
		//再返回父元素，以便实现方法连缀
		return parent;
	}
	Z["prependChild"]=prependChild;
	
	
	//10.bindFunction(obj,func)让func中的this指向obj
	function bindFunction(obj,func){
		return function(){
			func.apply(obj,arguments);
		};
	}
	Z["bindFunction"]=bindFunction;
	
	
	//11.getBrowserWindowSize()获取浏览器窗口宽高返回一个包含width和height属性的对象
	function getBrowserWindowSize(){
		var de=document.documentElement;
		
		return{
			width:(
				window.innerWidth
				||(de&&de.clientWidth)
				||document.body.clientWidth),
			height:(
				window.innerHeight
				||(de&&de.clientHeight)
				||document.body.clientHeight)
		}
	}
	Z["getBrowserWindowSize"]=getBrowserWindowSize;
	
	
	
	//12.arrMax(array)和arrMin(array)分别返回数组中的最大元素和最小元素
	//arrMax(array)返回数组中的最大元素
	function arrMax(array){
		//第一种方法:利用apply参数为数组的特性
		return Math.max.apply(null,array);
		//另一种方法:Math.max(...arr)利用ES6中的展开运算符(...)
	}
	Z["arrMax"]=arrMax;
	//arrMin(array)返回数组中的最小元素
	function arrMin(array){
		return Math.min.apply(null,array);
		//另一种方法:Math.min(...arr)利用ES6中的展开运算符(...)
	}
	Z["arrMin"]=arrMin;
	
	
	
	//13.arrSort(array,direction)用快速排序法给数组排序，direction为"r"为降序其他为升序
	function arrSort(array,direction){
		//判断数组长度，避免出现死循环
		if(array.length<=1){return array}
		var arr1=[],
			arr2=[],
			last=array.pop();
		for(var i=0;i<array.length;i++){
			//判断是升序还是降序
			if(direction==="r"?array[i]>=last:array[i]<=last){
				arr1.push(array[i]);
			}else{
				arr2.push(array[i]);
			}
		}
		//递归法
		arr1=arrSort(arr1,direction);
		arr2=arrSort(arr2,direction);
		//返回排好序的数组
		return arr1.concat(last,arr2);
		//return arrSort(arr1,direction).concat(last,arrSort(arr2,direction));
	}
	Z["arrSort"]=arrSort;
	
	
	//14.wheel(obj,upFn,downFn)鼠标滚轮事件
	function wheel(obj,upFn,downFn) {
		if(arguments.length < 3){
			alert('Sorry,你输入的参数不够');
		}
		//IE,chrome,opera浏览器鼠标滚轮事件
		obj.onmousewheel = fn;
		//firefox浏览器鼠标滚轮事件
		obj.addEventListener&&obj.addEventListener('DOMMouseScroll',fn,false);
		function fn(ev){
			var event = ev || window.event;
			var bool = true;
			if(event.wheelDelta){
				bool = event.wheelDelta > 0;
			}else if(event.detail){
				bool = event.detail < 0;
			}
			bool ? upFn() : downFn();
			
			//当页面本身就存在滚动条时就会出现异常，解决办法：阻止浏览器的默认行为
			function prevent(evt){
				if(evt.preventDefault){
					evt.preventDefault();
				}else{
					evt.returnValue = false;
				}

			}
			prevent(ev);

		}
	}
	Z["wheel"] = wheel;

    /**
     * 15.indexOf(array,item[,from])查询元素在数组中的索引
     * indexOf是ECMAScript5的方法，IE8以下不支持,这里添加兼容低版本浏览器的代码
     */
	Z.indexOf = Array.prototype.indexOf ? function(array,item,from){
        return Array.prototype.indexOf.call(array,item,from);
    } : function(array,item,from){
        var len,i;
        len= array.length;
        i = (from < 0) ? Math.max(0,len + from) : +from || 0;
        for(; i < len; i++){
            if(i in array && item === array[i]){
                return i;
            }
        }
        return -1;
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})();