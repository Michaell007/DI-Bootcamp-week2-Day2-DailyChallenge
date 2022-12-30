let sentences = "The movie is not that bad, I like it";

// the position of the substring “not”
let wordNot = sentences.indexOf("not");

// the position of the substring “bad”
let wordBad = sentences.search("bad");

// If the word “bad” comes after the word “not”
if (Number(wordNot) > -1 && Number(wordNot) && Number(wordNot) < Number(wordBad)) {
    let lastWordBad = (sentences.search("bad") + ('bad'.length));
    let wordSlice = sentences.substring(wordNot, lastWordBad);
    let wordRemplace = sentences.replace(wordSlice, 'good');
    console.log( wordRemplace );

} else if (Number(wordBad) == -1 || Number(wordNot) == -1 || (Number(wordNot) > Number(wordBad)) ) {
    // If the word “bad” does not come after “not” or the words are not in the sentence
    console.log(sentences);
}















