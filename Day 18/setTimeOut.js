//random numbers
const randomNumber = Math.floor(Math.random() * 999) ;

        function RanNumber() {

            console.log(randomNumber)
       
         } 
        setTimeout(RanNumber,500);



// random alphabets
let max = 26; 

function RanAlphabets(n) 
{ 
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
		'h', 'i', 'j', 'k', 'l', 'm', 'n', 
		'o', 'p', 'q', 'r', 's', 't', 'u', 
		'v', 'w', 'x', 'y', 'z']; 

	let res = null; 
	for (let i = 0; i < n; i++) 
	{ 
		res =  alphabet[(Math.floor(Math.random() * 10) % max)]; 
	} 

	console.log(res); 
} 


let n = 1; 
setTimeout(RanAlphabets,1000,n); 
