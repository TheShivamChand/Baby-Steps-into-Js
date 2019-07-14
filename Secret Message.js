let secretMessage = ['Learning', 'is', 'not', 'about', 'what',
					'you', 'get', 'easily', 'the', 'first', 
					'time,', 'it', 'is', 'about', 'what', 
					'you', 'can', 'figure', 'out.', '-2015,'
					, 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to','Program.');

console.log(secretMessage);

secretMessage[7]='right';

console.log(secretMessage);

secretMessage.shift();	//Pops the first element

console.log(secretMessage);

secretMessage.unshift('Programming');	//Pushes the element in the first place

console.log(secretMessage);

secretMessage.splice(6,5,'know');	//Used to slice the array elements and change it with one new element

console.log(secretMessage);

console.log(secretMessage.join(' '));