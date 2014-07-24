;(function(){
    /***
    *basic decorator
    *
    */
    function sum(a,b){
        return a+b;
    };

    function doubleSum(f){
        // f is just a first-class value
        return function(){// 返回的是wrapper，
            return 2*f.apply(this,arguments);
        }
    };

    //usage
    var newsum = doubleSum(sum);
   // alert(newsum(10,11));

    //----complex decorator-------------------

    function plain(a,b){
        if(arguments.length<1) return 0;
        return a+b;
    }

    function complex(f){
        //传入的f 只是一个f的定义，非执行后的东西
        var name = "zhang";
        var base = 10;
        var args;
        function wrapper(){
            args =[].join.call(arguments,"**");
            return base*f.apply(this,arguments);
        }

        wrapper.log = function(){
            alert(name + " made this and say: the result is base on " + base + " and args are" +args);
        }

        return wrapper;
    }

    //usage
//    plain = complex(plain); // 输出的新plain  和 原来的 plain已经不是一回事了，把此时的plain 当作普通变量好了（等号左侧的plain）
 //   alert(plain(1,2));
//    plain.log();


    //practice 实践，网络中经常需要使用 cache  保持单例等情况

    function serial(int){
        return (Math.random()*int).toFixed(5);
    };

    function uniqueSerial(f){
        var cache = {};
        function singleton(arg){
            if(!(arg in cache)){
                cache[arg] = f.call(this,arg);
            }
            return cache[arg];
        }

        singleton.clear = function(){
            cache = {};
        };

        singleton.cache = function(){
            return cache;
        }
        return singleton;
    }

   serial = uniqueSerial(serial);
  //  alert(serial(5));
    //alert(serial(5));
    //alert(serial.clear());
    //alert(serial(5));
  }());
