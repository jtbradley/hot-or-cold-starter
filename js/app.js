
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

  		if (userNum > randInt) {
		alert("too high");
	};
	});

	


	


});


