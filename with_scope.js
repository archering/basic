;(function(){
    /***
    * with temporary scope,  lexicalEnvironment will see it
    */
    function test1(){
        var a=123;
        with({a:'abc'}){
            alert(a);
        }
    };
    //usage
//    test1();
//nested with
    function test2(){
        var a=123;
        var ss = {b:'zhang'}
        with({a:'abc'}){
            with(ss){
             alert('a is ' + a + ' b:' + b);
            }

        }
    };
    //usage
//    test2();

//change is ok, add not ok
    function test3(){
        var a=123;
        var ss = {b:'zhang'}
        with(ss){
            b = "china";
            age = 11;
        }
        alert(ss.b + " : " + ss.age + " : " + window.age);//age undefined

    };
//usage
 //   test3();
}());
