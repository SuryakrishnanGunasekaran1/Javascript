const randomNumber = Math.floor(Math.random() * 100) ;

        function checkGuess() {
            const userGuess =25
            
            if (userGuess == randomNumber) {
                console.log('Congratulations! You guessed the correct number!');
                
            } else if (userGuess < randomNumber) {
                console.log(`you entered ${randomNumber} Too high! Try again.`);
              
            } else if(userGuess > randomNumber){
                console.log(`you entered ${randomNumber} Too low! Try again.`);
              
            }
        }
        checkGuess();
