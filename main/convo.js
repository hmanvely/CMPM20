/*
A dialog is an array that contains a question in it's first element followed by any amount of answers.
Whatever the user clicks, it will store the # in 'Answer' and the text in 'strAnswer'
startConvo() is an example of a conversation
*/

use2D = true;

var qDoYouWantIceCream= "Do you want ice cream?";
var ansYes = "Yes";
var ansNo = "No";
var DoYouWantIceCream = [qDoYouWantIceCream, ansYes, ansNo];

var qTopings = "Do you want sprinkles or syrop?";
var ansSprinkles = "Sprinkles";
var ansSyrop= "Syrop";
var WhatTopingsUwant = [qTopings, ansSprinkles, ansSyrop];

var answer;
var strAnswer;

startConvo();

function ask(dialog)
{
yPosition = 0;
ySpacing = 30;
var Qtext = new TextBox(dialog[0])
world.addChild(Qtext)
var ansBtns = []; //array of buttons, to be able to delete them later
for(var i = 1; i < dialog.length;i++)
{
	yPosition += ySpacing;
	var aBtn = new TextButton(dialog[i]);
	aBtn.answer_nubmer = i;
	aBtn.click = function(){
		alert("Button 1 clicked")
	}
	aBtn.color = "red";
	aBtn.y = yPosition; //space buttons out
	aBtn.bbox.y = aBtn.y;
	aBtn.func = aBtn.click;
	ansBtns.push(aBtn);
	// alert(aBtn.answer_nubmer);
	//alert( "X: " + aBtn.bbox.x + "Y: " + aBtn.bbox.y + "width: " + aBtn.bbox.width + "  height: " + aBtn.bbox.width);
	alert(aBtn.func);
	
	world.addChild(aBtn);
}
}

function buttonClicked(btn){
	answer = btn.answer_nubmer;
	strAns = btn.text;
}

function startConvo()
{
	ask(DoYouWantIceCream);
	if(answer==1) //or strAnswer=ansYes // or strAnswer="Yes"
	{
		alert(DoYouWantIceCream[answer]);
		ask(WhatTopingsUwant);
		if(answer==1)
		{
			alert(WhatTopingsUwant[answer]);
		}
		else if(answer==2)
		{
			alert(WhatTopingsUwant[answer]);
		}
	}
	else
	{
		alert(DoYouWantIceCream[answer]);
	}
}