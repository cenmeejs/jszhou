//addEvent(node,type,listener)添加事件
function addEvent(node,type,listener){
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
//removeEvent(node,type,listener)移除事件
function removeEvent(node,type,listener){
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
function getElementsByClassName(className,tag,parent){
	parent=parent||document;
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
var z=document.getElementById("z");

/* function lastp(e){
	e=e||window.event;
	var key=e.which||e.keyCode;
	var pline=getElementsByClassName("pline","p");
	//alert(pline[0].innerHTML);
	if(key==8){
		//if(pline.length==1&&pline[0].innerHTML=="<br>")
		e.preventDefault();
	}
} */
addEvent(z,"keydown",tabKey)

function tabKey(e){
			e=e||window.event;
			var code=e.charCode||e.keyCode;
			var strTab="<span style='display:inline-block;width: 40px;height: 20px;background: red;'>&nbsp;<span>";
			if(code==9){//tab键
				if(document.selection){//ie
					e.returnValue=false;//取消浏览器默认动作 ie
					var rg=document.selection.createRange();
					rg.pasteHTML(strTab);
				}else{
					e.preventDefault();//取消浏览器默认动作	
					var selection=window.getSelection();
					var rg=selection.getRangeAt(0);
					var fragment = rg.createContextualFragment(strTab);
					var oLastNode = fragment.lastChild; //获得DocumentFragment的末尾位置
					rg.insertNode(fragment);
					rg.setEndAfter(fragment);//设置末尾位置
					rg.collapse(false);//合并范围至末尾
					selection.removeAllRanges();//清除range
					selection.addRange(rg);//设置range
				}
			}
			if(code==8){
				
			}
		}
