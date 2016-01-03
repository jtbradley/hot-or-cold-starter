
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(400);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(400);
	});

  	var randInt; // make accessible in global context
  	function getRandom(min, max) { // (min = included, max =excluded)
  		randInt= Math.abs(Math.floor(Math.random() * (min - max)) + min);
  		console.log(randInt);
  		return(randInt);
  	};

  	getRandom(1, 101);

  	var userNum; // make accessible in global context
  	$( "#mainForm" ).submit(function() {
  		
  		event.preventDefault();
  		userNum = document.getElementById('userGuess').value; 
  		console.log(userNum);	

  		var numDiff = userNum - randInt; // the difference	

  		if (userNum == randInt) {
  			alert("CONGRATULATIONS!! YOU WIN! YOU ARE ULTIMATE HOTTIE!!!! ;)");
  		}
  		else if (Math.abs(numDiff)<= 3) {
  			alert("You are practically on FIRE!!!!!");
  		}
  		else if (Math.abs(numDiff)<= 5) {
  			alert("You are SCORCHING Hot!! >:D" );
  		}	
  		else if (Math.abs(numDiff)<= 10) {
  			alert("Almost there!! You are very hot!");
  		}
  		else if (Math.abs(numDiff)<= 20) {
  			alert("You are quite warm.");
  		}
  		else if (Math.abs(numDiff)<= 30) {
  			alert(" Let's just say you're not cold...");
  		}
  		else if (Math.abs(numDiff)<= 40) {
  			alert("Meh, room temp. You can do better.");
  		}
  		else if (Math.abs(numDiff)<= 50) {
  			alert("You need a jacket?");
  		}
  		else if (Math.abs(numDiff)<= 60) {
  			alert("You are very, very cold. I am sorry.");
  		}
  		else {
  			alert("LOL You are FREEZING cold... Not even close.");

  		}

  		counter ++; // increment the count on submit
  		$("#count").html(counter);

  	});

  	var counter = 0;

  	$(".new").click(function() {
  		location.reload();
  	});
  	

  	




  });


