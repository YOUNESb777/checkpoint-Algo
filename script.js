function analyzeSentence(sentence) {
    
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    
    sentence = sentence.trim();

    
    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];

        if (ch === '.') {
            break;
        }

        lengthCounter++;

        if (ch === ' ') {
            wordCounter++;
        }

        if ('aeiouAEIOU'.includes(ch)) {
            vowelCounter++;
        }
    }

    if (lengthCounter > 0) {
        wordCounter++;
    }

    //this is output the results
    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}


