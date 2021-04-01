// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
	return Math.abs(42 - blocks);
}

function distanceFromHqInFeet(feet) {
	return Math.abs((42 - feet) * 264);
}

function distanceTravelledInFeet(begin, finish) {
	return Math.abs((begin - finish) * 264);
}

function calculatesFarePrice(start, destination) {
	const distance = Math.abs((start - destination) * 264);
	switch (true) {
		case distance <= 400:
			return 0;
		case distance > 2500:
			return 'cannot travel that far';
		case distance > 2000:
			return 25;
		case distance > 400:
			return 0.02 * (distance - 400);
	}
}
