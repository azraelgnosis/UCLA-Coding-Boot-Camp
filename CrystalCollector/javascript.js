$( document ).ready(function() {
	// returns a random integer between lower and upper bounds
	function randint(lower, upper) { return Math.floor(Math.random() * (upper-lower) + lower); }

	var random = randint(19, 120); // random number between 19 and 120
	$('#randomNum').text(random); // assigns "random"  to "randomNumber" in HTML

	// random numbers between 1 and 12 for crystals
	var num1 = randint(1, 12);
	var num2 = randint(1, 12);
	var num3 = randint(1, 12);
	var num4 = randint(1, 12);

	// sets initial total to 0
	var total = 0;
	$('#total').text(total); // assigns 'total' to 'total'

	// when a crystal is clicked, its value is added to the total
	$('button.crystal').on('click', function(){
		// determins which button was clicked
		switch(this.id) {
			case 'one':	total+=num1; break;
			case 'two':	total+=num2; break;
			case 'three': total += num3; break;
			case 'four': total += num4; break;
		}

		$('#total').text(total); // assigns new 'total' value to the span 'total'

		// checks if win/loss condition has been met
		if (total === random) {	win(); }
		else if (total > random) { lose(); }
		else {}
	});

	var wins = 0;
	var losses = 0;

	$('#numWins').text(wins); // assigns 'wins' to 'numWins'
	$('#numLosses').text(losses); // assisn 'losses' to 'numlosses'

	// increments win/loss variable and resets values.
	function win() {
		alert("You won!");
		wins++;
		$('#numWins').text(wins)
		reset()
	}

	function lose() {
		alert("You lost!");
		losses++;
		$('#numLosses').text(losses)
		reset();
	}

	// resets game
	function reset() {
		random = randint(19, 120);
		total = 0;
		num1 = randint(1, 12);
		num2 = randint(1, 12);
		num3 = randint(1, 12);
		num4 = randint(1, 12);

		$('#randomNum').text(random);
		$('#total').text(total);
	} 

});