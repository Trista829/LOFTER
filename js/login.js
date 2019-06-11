window.onload = function(){
	var tabHd = document.getElementById("tab-hd");
	var aLi = tabHd.getElementsByTagName("li");
	var bd = document.getElementsByClassName("bd");
	for (var i=0; i<aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onclick = function() {
			for (var i=0; i<aLi.length; i++) {
				aLi[i].className = "";
				bd[i].style.display = "none";
			}
			this.className = "login current";
			bd[this.index].style.display = "block";
		}
	}
}
document.getElementById("email").onclick = function(){
	if(document.getElementById("email")){
		document.getElementById("email").value = "";
	}
	else{
		document.getElementById("email").value = "常用邮箱\网易邮箱";
	}

}
document.getElementById("password").onclick = function(){
	document.getElementById("password").value = "";
}
