// Generate Interests from Added and Liked Things

// DEPENDENCIES
var pos = require('pos'); // pos - part of speech tagging library

var someInput = 'Parking cars.';

function interests(someInput) {

    // build array of interests
    var interests = ['gaming', 'cars', 'programming']

    // Run pos
    var words = new pos.Lexer().lex(someInput);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);

    // walk through tagged words
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        
        //console.log(word + " /" + tag);
        
        // Only get Nouns and Verbs (see pos documentation)
        if (['NN', 'NNP', 'NNPS', 'NNS', 'VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ'].indexOf(tag) > -1) {
            
            // Place each in an object
            interest = {
                Interest: word,
                Type: tag
            }
            interests.push(interest)
        }
    }
    console.log(interests)
}