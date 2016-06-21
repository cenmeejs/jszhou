## 标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
## 列表
### 无序列表
* 第一列
    * 第一列的第一子列
    - 第一列的第二子列
* 第三列
- 第四列
***
### 有序列表
1. 第一列
    1. 的第一子列
    2. 第一列的第二子列
1. 第一列
    1. 的第一子列
    2. 第一列的第二子列
    ## 引用
> Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。看到这里请不要被「标记」、「语言」所迷惑，Markdown 的语法十分简单。常用的标记符号也不超过十个，这种相对于更为复杂的HTML 标记语言来说，Markdown 可谓是十分轻量的，学习成本也不需要太多，且一旦熟悉这种语法规则，会有一劳永逸的效果。

## 插入链接
[百度](http://www.baidu.com)
## 插入图片
![node.js](http://g.hiphotos.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=278308933bdbb6fd3156ed74684dc07d/42a98226cffc1e17fcdb30594890f603738de976.jpg)
## 粗体和斜体
**这是粗体**
*这是斜体*

```
window.mjxAddFieldsetLabel = function(wrap){
         var fieldsets = wrap.query('fieldset'),
             len = fieldsets.length;
         wrap.setLayout({
             type:'vbox',
             align:'center'
         });
         Ext.Array.forEach(fieldsets,function(item,index){
             item.addCls(index == len-1 ? 'mjx-fieldset-last' : 'mjx-fieldset');
             item.setLayout({
                 type:'table',
                 columns:2,
                 tableAttrs:{
                     style:{
                         width:'100%'
                     }
                 }
             });
             item.insert(0,{
                 xtype:'component',
                 html:item.labelTitle,
                 cls:'mjx-component-label',
                 colspan:2
             });
         });
         return wrap;
     };
```
