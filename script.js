let sentences = "The movie is not that bad, I like it";

let wordNot = sentences.indexOf("not");
let wordBad = sentences.search("bad");

if (Number(wordNot) > -1 && Number(wordNot) && Number(wordNot) < Number(wordBad)) {
    let lastWordBad = (sentences.search("bad") + ('bad'.length));
    let wordSlice = sentences.substring(wordNot, lastWordBad);
    let wordRemplace = sentences.replace(wordSlice, 'good');
    console.log( wordRemplace );
} else if (Number(wordBad) === -1 || (Number(wordNot) > Number(wordBad)) ) {
    console.log(sentences);
}

















