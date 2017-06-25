function txtFocus(ele){
    var elementID = document.getElementById(ele);
    elementID.focus();

    var element = document.getElementsByName(ele);
    element[0].style.top = "-5px";
    element[0].style.fontSize = "11px";
    element[0].style.transition = "top 300ms";
    element[0].style.color = "#1B4F72"
    element[0].style.opacity = "1"
}

function textFocusOut(ele){
var element = document.getElementsByName(ele);
    element[0].style.top = "5px";
    element[0].style.fontSize = "16px";
    element[0].style.color = "#1B4F72"
     element[0].style.opacity = "0.5"
}