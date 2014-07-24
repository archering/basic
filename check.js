;(function(win){
    /***
    *@author zhangdong
    *@param {primitive,object} ins
    */
    function findout(ins){
        if(typeof(ins) == "number" && isNaN(ins)) return NaN;
        if(typeof(Infinity) == "number" && !isFinite(ins)) return ins;//Infinity
        var res = {}.toString.call(ins).match(/\b([A-Z][a-z]+?)\]$/)[1];
//        if(res == "Object" || arguments[1]){
//            if(ins instanceof arguments[1];
//        }
        return res;
    };

    /**
    *
    */
    function ist(ins,cls){
        var type = findout(ins);
        if(type == "Object"){
            return ins instanceof cls;
        }
        return (type == cls.name);
    };
    win.findout = findout;
    win.ist = ist;

}(window));
