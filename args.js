;(function(){
    function factorial(val){
        return (val==1)? 1 : val*arguments.callee(val-1);
    };

   // alert(factorial(1) + ":" + factorial(3) + ":" + factorial(2));
    //arguments.callee.caller 可以用来debug 判断这个函数是被谁调用的

    //static method and property
    //just attached to a function
    function noone{
        arguments.callee.sta0 = 333;
    };
    noone.sta1 = 111;
    noone.met  = function(){};

}());
