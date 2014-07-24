;(function(){
// css 描述的宽度高度有很多，
// scrollbar 会占据 padding的部分（如果padding存在），或者占用content的部分（如果padding不够用，或者无padding）
// css 里面定义的 【width  height】,指的是内容content的实际宽度和高度
/**
*
    body{
        width:100px;
        height:100px
    }

***/
//但是这个值并不能真正的反应内容区域的大小，如果width定义如上，但是出现了纵向滚动条，scrollbar 20px，无padding（意思是，scrollbar  占据了内容部分）
//那么,内容的实际大小事  100 - 20 = 80px

//【 clientWidth / clientHeight】  == content + padding  的大小，但是不包含scrollbar
//    clientWidth = width + paddingWidth - scrollbar_width
//【scrollWidth/scrollHeight】
    /***
        scrollWidth = clientWidth + scrollable_field; (不包含滚动条)；
        scrollHeight = clientHeight + scrollable_field

        scrollTop 是指，当前scroll展示窗口 距离 scrollArea 最顶端开始地方的高度
        scrollLeft 是指，当前scroll 展示窗口 距离最左边，开始部分的宽度
        这两个值可以，被设置，自动滚动条

    **/

    //【offsetWidth / offsetHeight】
    /***
    offsetWidth = content + padding + border;  // 无 margin

    【clientTop / clientLeft】 其实client部分距离 外框offset的距离
    具体就是，left  border_width  == clientTop
        right border_width = clientLeft

    【offsetParent ， offsetLeft/ offsetTop】
    offsetWidth /height 就是真个元素的占据额大小，他得parent 即是，这个元素在那里进行放置的

    offsetParent 对于 absolute 布局来说 就是 距离他最近的 已经设置了position得元素，如果没有就是body

    对于静态布局，未设置position的元素，设置为static的元素，如果是table布局的话，是离他最近的cell，或者就是body

    其他布局都是  最近的元素



    [查看一下 matric_offset.html]

    **/
    /***
    * 不占布局空间
    */
    function outMatric(elem){
        return !elem.offsetHeight && !elem.offsetWidth;
    }
}());
