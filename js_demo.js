"use strict";

function soundMaker(sound, times) {
	
	// closure
	function makeSound() {
		console.log(`${sound}`);
	}

	for (let i = 0; i < times; i++) {
		makeSound();
	}
}

soundMaker("Wooof", 5);