;(function(){
    /**
    *把arguments 转换成 数组
    */
    function args2Array(args ){
        return [].slice.call(args);
    };

    /**
    * ar 是一个array like的序列，可以是 array或者arguments
    */
    function maxmum(ar){
        return Math.max.apply(0,ar);
    }


    function minmum(ar){
        return Math.min.apply(0,ar);
    }

    Array.prototype.isThere = function(val){
        return this.indexOf(val) || (function(){
            for(var i=0;i<this.length;i++){
                if(this[i] == val) return i;
            }
            return -1;
        }());
    }
}());
