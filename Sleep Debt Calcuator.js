const getSleepHours = day =>{
	if(day==='monday')
		return 8;
	else if(day==='tuesday')
		return 8;
	else if(day==='wednesday')
		return 7;
	else if(day==='thursday')
		return 7;
	else if(day==='friday')
		return 8;
	else if(day==='saturday')
		return 8;
	else if(day==='sunday')
		return 10;
};

//console.log(getSleepHours('sunday'))

const getActualSleepHours = () =>{
	return getSleepHours('sunday')+getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')
	+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');
}

const getIdealSleepHours = () =>{
	const idealHours=8;
	return idealHours*8;
}

//console.log(getActualSleepHours())
//console.log(getIdealSleepHours())

const calculateSleepDebt = () =>{
	const actualSleepHours=getActualSleepHours();
	const idealSleepHours=getIdealSleepHours();
	if(actualSleepHours===idealSleepHours)
		return 'You are sleeping perfectly';
	else if(actualSleepHours>idealSleepHours)
		return 'You are sleeping '+(actualSleepHours-idealSleepHours)+' hours more than you should sleep';
	else
		return 'You are sleeping '+(idealSleepHours-actualSleepHours)+' hours less than you should sleep';
};

console.log(calculateSleepDebt());