const sentence = "hello there from lighthouse labs";

let delay = 0;

const typewriter = function() {
    for (let char of sentence) { //loop through sentence
        setTimeout(() => { //
            process.stdout.write(char);
        }, delay)
        delay += 50;
    }
    setTimeout(() => {
            console.log('\n')
        }, delay) //sets a new timeout to create new line after the sentence ends
};

typewriter(); //call the function to execute