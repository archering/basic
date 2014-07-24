;(function(){
    /***
    * basic closure
    */
     function showSum(a){
         var hold = a;

         function sum(b){
            hold = a+b;
             return sum;
         }

         sum.toString = function(){ return "result is :" + hold; };
         return sum;
     };
    //usage
//    alert(showSum(5)(6));

  //上面的还可以直接写成
    function showSum2(a){
        var hold = a;
        function sum(b){
            hold = a+b;
            alert("结果是 ：" + hold);
        }

        return sum;
    };
    //usage;
//    showSum2(2)(3);

//----------------------------------------------------------
//complex closure   in loop
function loopClosure(){
    var loops = [];

    for(var i=0;i<10;i++){//i=10 的时候停止，但是此时，i已经是10了
        var loop =  function(){
            alert(i);
        };
        loops.push(loop);
    }

    return loops;
};

//usage
//    alert(loopClosure()[3]());
//这是因为，closure 在使用的时候（execution），context已经发生了变化，
//如果想每次输出的结果和序号相同，则需要，在loop的外面再包一层，在那一层里hold住需要的环境
 function loopClosure2(){
    var loops = [];

    for(var i=0;i<10;i++){//i=10 的时候停止，但是此时，i已经是10了
        var loop =  (function(i){
            return function(){
               alert(i);
            }
        })(i);//执行时需要一个参数
        loops.push(loop);
    }

    return loops;
};

//usage
// alert(loopClosure2()[3]());//3

}());
