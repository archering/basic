;(function(){
    /***
    js 里面设置css
    elem.className +="name3";//可以累加
    elem.className = "name1";

    ***/
    var fs = document.getElementById("fst");
    fs.className = "wh co";//一次只能写一个，空格分开

    //fs.className +=" co";//累加，字符串，前面留出空格


    //js  设置空格 使用 camelCase  ,被认为是js的一部分

    //ele.style.zIndex  //not z-index
    //ele.style.backgroundColor // not background-color

    //对于供应商前缀

    //ele.style.MozBorderRadius = "5px"; //  第一个 M 大写
    //ele.style.WebkitBorderRadius = "10px";// 第一个W 大写


    //使用  cssText 属性，此时写在 cssText 里面的内容被认为和写在css文件里面的是一致的

    //使用  hyphens  形式


    fs.style.cssText = "border:2px dashed green;\
        color:black;\
        background-color:yellow;\
        font-size:20px !important;\
        text-align:center;\
     /**   margin:10px;\ */\
    ";

    // 如果没有 style 文件里面（cssText  或  style 设置 不算）显示的设置子属性，只是设置了margin：10px
    //想要读取子属性 是不行的
    //上面 margin：10px
   // alert(fs.style.marginTop); //无法获得，因为
    //如果上面 cssText 设置了，是可以起作用的

    //如果此时还想读取怎么办， 【window.getComputedStyle / element.currentStyle】
    var res = window.getComputedStyle(fs);
  //  alert(res.marginTop);// 10px  works   IE 类似，只不过保留设定时，采用的单位(转换的话，采用runtimeStyle，pixelLeft);


 }());
