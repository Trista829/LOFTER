function my$(id) {
    return document.getElementById(id);
}
//更多的框框
my$("last").onmouseover = function () {
    my$("selc").style.display = "block";
}
my$("last").onmouseout = function () {
    my$("selc").style.display = "none";
}

//搜索框的弹框
my$("search").onfocus = function () {
    my$("taglist").style.display = "block";
}
my$("search").onblur = function () {
    my$("taglist").style.display = "none";
}
my$("selc").setAttribute()
