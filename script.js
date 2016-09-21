var round = function(text, pos) {
    function setCharAt(str,index,chr) {
       if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    if (text.length > pos) {
        for (i=1;i<text.length;i++){
            if (text[i] === ".") {
                i = text.length;
                if (parseFloat(text[pos],10) >= 5) {
                    text = (setCharAt(text,pos-1,((parseFloat(text[pos-1],10))+1).toString(10))).substr(0,pos);
                } else {
                    text = text.substr(0,pos);
                }
            } 
        }
    }
    return text;
};
var $ = jQuery.noConflict();
$(function() {
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function(){
    number += $(this).text();
    totaldiv.text(number);
    testNumLength(number);
    });
    $("#operators a, #side a").not("#equals, #decimal").click(function(){
        if ($(this).attr("id") === "sqrt") {
            operator = "sqrt";
            $("#equals").trigger();
            return
        }
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
    number = "";
    totaldiv.text("0");
    if ($(this).attr("id") === "clearall") {
      newnumber = "";
    }
    });
    $("#decimal").click(function() {
        var numOfDecs = 0;
        for (i=0; i <= number.length; i++) {
            if (number[i] === ".") {
                numOfDecs =+ 1;   
            }
        }
        if (numOfDecs === 0){
            number = number + ".";
        }
        totaldiv.text(number);
        testNumLength(number);
    })
    $("#equals").click(function(){
        if (operator === "+"){
            number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);
        } else if (operator === "-"){
            number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
        } else if (operator === "/"){
            number = (parseFloat(newnumber, 10) / parseFloat(number,10)).toString(10);
        } else if (operator === "*"){
            number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
        } else if (operator === "&sqrt;"){
            number = (Math.sqrt(parseFloat(number, 10))).toString(10);   
        } else if (operator === "^"){
            number = (Math.pow(parseFloat(newnumber, 10))).toString(10);   
        }
        totaldiv.text(number);
        testNumLength(number);
        number = "";
        newnumber = "";
    });
  $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#one").click();
       } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 97) {
            $("#clearall").click();
        } else if (keycode === 99) {
            $("#clear").click();
        } else if (keycode === 61) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#times").click();
        } else if (keycode === 47) {
            $("#divide").click();
        }
    });
}); 