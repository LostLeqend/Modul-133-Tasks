console.log("Task 3b");

class WordCount {
    constructor(word, wordCount) {
        this._word = word;
        this._wordCount = wordCount;
    }

    _word = "";
    _wordCount = 0;
}

var wordcount = function (text) {
    var words = text.split(" ");
    var singleWordList = [];

    words.forEach(word => {
        if (!(singleWordList.some(x => x._word === word))) {
            let singleWord = new WordCount(word, 1);
            singleWordList.push(singleWord);
        } else {
            let index = singleWordList.findIndex(x => x._word === word);
            singleWordList[index]._wordCount += 1;
        }
    });

    return singleWordList;
}

let wordList = wordcount("school is very very very boring that's why i like school");
console.log(wordList);