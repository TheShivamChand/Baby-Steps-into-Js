const getRandEvent = () => {
	const random= Math.floor(Math.random()*3);
	if(random===0)
		return 'Marathon';
	if(random===1)
		return 'Triathlon';
	else
		return 'Penathalon';
};

const getTrainingDays = event => {
	let days=0;
	if(event==='Marathon')
		days=50;
	if(event==='Triathlon')
		days=100;
	else
		days=200;
	return days;
};

const name='Nala';

const logEvent = (event,name) => {
	console.log(`${name}'s event is: ${event}`);
};

const logTime = (days,name) => {
	console.log(`${name}'s time to train is: ${days}`);
};

const event= getRandEvent();
const days=getTrainingDays(event);

logEvent(event,name);
logTime(days,name);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(event2, name2);
logTime(days2, name2);