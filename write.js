;(function(){
    //document.writeln
    //docuemnt.write  only useful for  open document == unclosed document == un loaded document

// for closed document. it will clear all exists content,and write new one

    //docuemnt.write is fast,it will stop the parser  turn to deal with the write one and then go
    //on;
    // if you use document.write insert a <script src='http://www.....'>
    //it will stop there and parse it then load the src then executing it  ... then do rest parse
    //use document.appendChild()  document.insertBefore()  will not lead to this

    document.write("<p> hello document.write<p>");

}());
