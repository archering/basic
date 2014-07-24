;(function(){
    /**
    *   only function scope !!!
    */
    function example(){
        //lexical = {a:undefined,b:undefined,test:function(){},bb:undefined};
                                                                           ^
        var a = 123;                                                       |
        //lexical = {a:123,b:undefined,test:function(){},bb:undefined};    |
        var b = "china";                                                   |
        //lexical = {a:123,b:"china",test:function(){},bb:undefined};      |
        function test(){                                                   |
            //when execution   test.[[scope]]------------------------------>
        };
        //lexical = {a:undefined,b:undefined,test:function(){},bb:undefined};
        var bb = function(){

        };
        //lexical = {a:undefined,b:undefined,test:function(){},bb:function(){ }};
    };

    //------------------in the real world------------------------
    //there are actually two environment, variableEnvironment, lexicalEnvironment
    //variableEnvironment holds the 【var】variable declartion, 【function aa(){}】 function declaration
    //variableEnvironment is  unchangeable
    //lexicalEnvironment is the same as variableEnvironment but changeable


    //【lexical environment】 holds variables and parameters,reference the outer scope
    //【execution context】 points to the lexical environment and figure out 【this】



    //经典案例

    function  lexiVSvari(){
        var a = "abc";
        with({a:'bar'}){
            function showme(){//function declaration through variableEnvironment findout [a]
                alert(a);
            }

            showme();//execution, firefox -->bar, chrome-->abc
        };

    };

    function lexicalVSvari(){
        var a = "abc";
        with({a:'bar'}){
            (function(){alert(a);})();//expression through lexicalEnvrionment findout [a]
        };//always  'bar'
    };


        //lexicalEnvironment saw the temporary scope,  variableEnvironment didnot see the temporary


}());
