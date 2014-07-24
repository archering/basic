;(function(){
    var table = document.getElementById("tb");
    //alert(table.rows[0].cells[0].innerHTML);  // rows[index] ; cells[index];

    var fm = document.forms[0];
    var fmcp = document.forms.fmname;
    //fm == fmcp
    //form 内部的元素
    var ip= fm.elements[0];
    var ipcp = fm.elements.inp1; //["inp1"] // 如果多个 elemen 重名，则返回多个

    //alert(ip.form == fm); // true,,  parent

    var sels = fm.elements["sel"];  //fm.elements[1];// fm.elements.sel
   // alert(sels.options[0] == sels.options["ch1"]);//true
    //alert(sels.options[sels.selectedIndex].value);
}());
