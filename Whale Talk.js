let input="a whale of a deal!";

var vowels=['a','e','i','o','u'];

var resultArray=[];

for(let i = 0; i < input.length; i++)
{
	for(let j = 0; j < vowels.length; j++)
	{
		if(input[i] === vowels[j])
		{
			if(vowels[j]==='u' || vowels[j]==='e')
			{
				resultArray.push(vowels[j]);
				resultArray.push(vowels[j]);
			}
			else
				resultArray.push(vowels[j]);
		}
	}
}

console.log(resultArray.join('').toUpperCase());