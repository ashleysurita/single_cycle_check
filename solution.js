function hasSingleCycle(array) {
  let visited = 0
	let currInd = 0
	while(visited < array.length) {
		if (visited > 0 && currInd === 0) return false
		visited++
		currInd = getNextInd(currInd, array)
	}
	
	return currInd === 0
}

function getNextInd(currInd, array){
	const jump = array[currInd]
	const nextInd = (currInd + jump) % array.length
	return nextInd >= 0 ? nextInd : nextInd + array.length
}
