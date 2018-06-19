
"use strict"


$(document).ready(function () {
    var resultList = $("#resultList");
resultList.text("Injected using Jquery");

var toggleButton = $("#toggleButton");

toggleButton.on("click",function (){
	console.log("Button clicked");
	resultList.toggle(250);

	if(toggleButton.text() === "Hide"){
		toggleButton.text("Show");
	}else{
		toggleButton.text("Hide");
	}
});

	var results =[];

	
function displayResults(results){
resultList.empty(); 

	 $.each(results, function(i, item){
		var newResult = $("<div class ='result'>"+
		"<div class ='title'>" + item.title + "</div>" + 
		"<div>" + "Level :" + item.level + "</div>" +
		"<div>" + "Total Videos:" + item.totalVideo + "</div>" +
		"<div>" + "Instruture:" + item.instructor + "</div>" + 
		"</div>");

	resultList.append(newResult);

	newResult.hover(function (){
    $(this).css("background-color", "lightgray");
    $(this).css("color", "darkblue");
    $(this).css("border-color", "blue");
	},function(){
		$(this).css("background-color", "transparent");
    $(this).css("color", "black");
    $(this).css("border-color", "#999");
	}
	)

	});



}

$("#loginForm").on("submit", function(){
      var username =$("#username").val();
      var password =$("#password").val();
      if(username && password){

	$.post("/api/login", {}, function(data)
	{
		console.log("Sucess :: " + data);
		displayResults(data);

		$("#loginForm").hide();
		$("#SighnUp-form").hide();
		$("#logoutSection").show();
		$("#errorMsg").empty();
	})
	.fail(function(data)
	{
		console.log("Something Bad Happened!")
	})
	.done(function(){

	})
}else{
	$("#errorMsg").text("username and password are mandatory.")
}
	return false;
});
$("#logoutButton").on('click', function(){
	$("#loginForm").show();
	$("#logoutSection").hide();
	$("#SighnUp-form").show();
	resultList.empty();
	resultList.text("Please log in to see all cources ")
})
});


