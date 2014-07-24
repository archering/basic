;(function(){
   // window.alert("BOM");// BOM操作
    //window.confirm("are you alright?");//return true/false
    //window.prompt("your birth date?","1983");// return null/undefined/2nd commit
    //console.log(); window.history;//
    //frames
    //location
    //XMLHttpRequest

    //-----------------------------
    //Object   Math, Array , Function  .....   javascript

    //---------------------
    //document
    //node
    //element
    //parentNode
    //innerHTML
    //getElementById
    //childNodes
    //nodeName
    //nextSibling
    //previousSibling


    //css  在 js中只能使用 camelcase形式
    //document.body.backgroundColor = red;
    //css   文件中 使用 hyphens形式
    //body{ background-color:red;  }

    /**************************?
    when the html parser is created the document is created
(1)
    document.documentElement  represent the topmost tag or the whole html structure;

    document.documentElement == html
(2)
    document.body represent the body tag

    document.documentElement  always available
    document.body could be empty
（3） there are  12 types of  Node
      most popular one are

ELEMENT_NODE  1
ATTRIBUTE_NODE 2
TEXT_NODE 3   //WHITE SPACE
COMMENT_NODE 8

DOM 节点的继承关系是： NODE --> ELEMENT -->HTMLElement

NODE 类拥有的属性
nodeName  uppercase
nodeType  1----12
nodeValue  有值： text_node, comment_node,attribute_node, cdatasection,procession_instruction
其他都为 null，对于script  也是null
parentNode
childNodes  // 所有的node  1-12
children  // only element node,  ie<9  also include comment node
firstChild
lastChild
previousSibling
nextSibling
attributes  lowercase
ownerDocument
node 类拥有的方法
hasChildNodes()  // true/false
hasAttributes()// on element node, true/false
-------------------------------
element 继承 node，拥有如下属性/方法
tagName
getAttribute(key);
setAttribute(key,val);
removeAttribute(key);

$$$$$$$
innerHTML in IE  is 【read-only】 for <head>,<html>,<style>,<table>,<title>,<tr>,<frameset>
<col>,<colgroup>,<tbody>,<tfoot>,<thead>


******/



/***
    check a element is total empty
*
*/
function check(e){
    return Boolean(e.childNodes.length);//0 false  true
    return (e.firstChild)?true:false;
    return (e.lastChild)?true:false;//  this one is shortly
}


/****'
* html markup 【attribute】 and DOM property are not the same thing
to

通过  d =  document.getElementById()或的dom对象，是个普通的object，这个d可以拥有自己的属性方法等
可以直接向其添加 属性，方法等，这些自己定制的方法属性，只会通过js显示出来，或者 （key in d）被判断出来，
这里面的属性名字是大小写敏感的。 不影响html里的属性


要想获取html markup  attribute 只能通过 getAttribute ； setAttribute 进行，当然也有其他方法，这两个兼容性最好
IE 通吃。
但是他们实际上，设置修改的却是dom object的property

IE<8 之前， property  和  attribute 是混合在一起的




*
*/

function setPnA(){
    var bo = document.body;
    bo.custom1 = "hello";
    bo.custom2 = "zhang";
    bo.Custom2 = "lee";
    //设置了三个自定义属性，大小写敏感，并未出现在html attribute 里面
}

setPnA();

//alert("custom1" in document.body);
//alert("custom2" in document.body);
//alert("Custom2" in document.body);

//  html attribute 大小写是不敏感的  attribute_node  的nodeName 是小写

 //   document.body.getAttribute("id")  == document.body.getAttribute("ID")

/******  标准的属性 DOM property 和 attribute 是双向同步的  ******/

function  syncID(){
    document.body.setAttribute("id","hey");  //  value 只能是 string
    alert(document.body.id); // hey
    document.body.id = "sasa";   // value  可以为任意值
    alert(document.body.getAttribute("id")); //sasa

};
//execution
//syncID();

//同步 可能不同值

function showDiff(){
    var a = document.createElement("A");
    a.href = "/";
    alert(a.href); //"http://127.0.0.1/"  Dom property 规定，url 必须是标准的 full url
    alert(a.getAttribute("href"));// "/"   attribute 则是  你填写的是什么就是什么W3C
    /**

    <INPUT type=‘radio’  checked>
    input.checked  // true
    input.getAttribute("checked"); // ""

    **/
};

//showDiff();

//单项同步
// property  同步  attribte的change
//attribute 不同步 property 的 change
    function onedSync(){
        var ip= document.createElement("input");
        ip.setAttribute("value","123");
        alert(ip.value); // 123
        ip.value = "china";
        alert(ip.getAttribute("value"));// still 123 not change
    };

  //  onedSync();


/****
    reserved word  【class】
    we cannot use element.class instead  we use [element.className]
**/

// IE<9 一下的版本 property 和 attribute  是混合的，
//IE 下 提供了一个版本叫 getAttribute("name",case-insensitive);  第二个参数



//大部分的情况下 使用 property  而不是 attribute

// html5  支持一种  data-*的 markup attribute 【custom data attribute】


//、、------------------------------------------------
//全兼容的只有  geteElementById    getElementsByTagName
//querySelector  querySelectorAll 支持 css 3语法
function queryS(){
   // alert(document.body.querySelector('#fst').nodeName);
    alert(document.body.querySelector('ul>li:first-child').firstChild.nodeValue);
};

//queryS();

//XPATH 查询在 现代浏览器下都支持，这种语法以前是用支持XML查询的，IE9依然是XML才可以使用，

// ！！！  所有的查询都是 live的。只有 querySelctorAll 是死的

//假设
/***
    var hey = docuemnt.body.getElementSByTagName("div"); // 得出的是div个数是 10ge
    document.body.innerHTML = ''; //
    hey.length // 0

    出现这种情况
    var div = hey[2];
    虽然 document.body.innerHTML = '';//清了，
    但是 div 还是存在的


    // 标准方法只有  insertBefore    appendChild

    当
    pa.insertBefore(new, null) 时，相当于， appendChild(new);

    var rmd  = pa.removeChild(elem); // 返回值  rmd  依然引用着这个被 删除出显示列表的 node

    两个节点之间调换位置
    pa.insertBefore(next,first); // 把节点 next放在 first 之前，即两个节点换位置


**/

    function switchnode(){
        var pa = document.body.getElementsByTagName("ul")[0];
            var fs = pa.getElementsByTagName("li")[0];//123
            var snd = pa.getElementsByTagName("li")[1];//456
            pa.insertBefore(snd,fs);
    };

    //switchnode();// 456  , 123
}());
