$(function() {
	$(".menulist:eq(0)").click(function() {
		$("#item1").css("display", "block");
	});
	$(".menulist:eq(1)").click(function() {
		$("#item2").css("display", "block");
	});
	$(".menulist:eq(2)").click(function() {
		$("#item3").css("display", "block");
	});
	$(".menulist:eq(3)").click(function() {
		$("#item4").css("display", "block");
	});
	$("#item1").click(function() {
		$("#item1").hide();
	});
	$("#item2").click(function() {
		$("#item2").hide();
	});
	$("#item3").click(function() {
		$("#item3").hide();
	});
	$("#item4 div:not(.item4-form)").click(function() {
		$("#item4").hide();
	});
});

function checkName() {
	var txtName = document.getElementById("txtName").value;
	var place = document.getElementById("txtName");
	if(txtName == "") {
		place.placeholder = "用户名不能为空！";
		return false;
	}
}

function checkEmail() {

	var txtEmail = document.getElementById("txtEmail").value;
	var place = document.getElementById("txtEmail");
	if(txtEmail == "") {
		place.placeholder = "邮箱不能为空！";
		return false;
	} else {
		var reg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/i;
		if(reg.test(txtEmail)) {
			
		} else {
			place.value = "格式错误，请重新输入！";
			return false;
		}
	}
}
function submit(){
	document.write("你点击了按钮，但它实际上没有去任何地方，因为这只是一个演示。");
}
