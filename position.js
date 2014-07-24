;(function(){
    // position: static, relative, absolute,fixed(IE8+)
    // static  称为  unpositioned element
    //其他设置都可以通过  top  left进行定位，
    //只有 设置了非static的元素 之间通过top，left才能定位
    //否则，a设置了定位position， b没有设置，top，left不起作用



//坐标系
/****
(1)relative to the document  (page)
(2)relative to the window

when no scroll  两个坐标系是重合的
document 坐标系  == window坐标系 + scroll部分

我们使用的 坐标系是相对于document的

elem.getBoundingClientRect(); //{top,left,right,bottom}  有些还实现了width, height //ie 支持
但是这四个值是相对于 window的，我们需要计算获得 实际的page坐标
right-left  == width
***/
    function getOffsetRect(elem){
        var box = elem.getBoundingClientRect();//{top,left,right,bottom}
        var body = document.body;// 非标准渲染模式下   、、elem布局的外部盒子，
        var dom = document.documentElement;//标准模式下

        //获得相对于 page的 top ， left ;top =box.top + scroll
        var scrollTop = window.pageYOffset||dom.scrollTop||body.scrollTop;// ie9+ 支持pageYOffset
        var scrolLeft = window.pageXOffset||dom.scrollLeft||body.scrollLeft;

        var clientTop = dom.clientTop||body.clientTop||0;
        var clientLeft = dom.clientleft||body.clientLeft||0;


        var top = box.top + scrollTop - clientTop;//去掉整个平面左上角的border宽度
        var left = box.left = scrolLeft -clientLeft;


        // 计算的时候不要把外部想得太复杂，不就是一个大一点的box  和普通的element没区别
        //我们计算的是当前 elem的外边沿，包括border，到 外部盒子的内边沿，不包括border

        return {top:Math.round(top),left:Math.round(left)};// firefox 需要 round

    };
}());
