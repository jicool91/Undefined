// FIZZBUZZ

for( var i = 1; i <= 100; i++ ) {
	console.log(
		( i % 3 == 0 && i % 5 == 0 ) 
			? 'FizzBuzz' 
			: i % 5 == 0 
				? 'Buzz' 
				: i % 3 == 0 
				? 'Fizz' 
				: i);			
}
