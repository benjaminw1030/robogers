# Specs:
1. Will recognize individual words.
* input: hello 
* output: "hello"
2. Will recognize multiple words.
* input: hello all
* output: ["hello", "all"]
3. Will recognize words that begin with a consonant.
* input: hello all
* output: "hello"
4. Will recognize words that begin with a vowel.
* input: hello all
* output: "all"
5. Will move the first consonant of words that begin with a consant to the end of the word.
* input: hello
* output: "elloh"
6. Will add -ay to the end of a word that begins with a consant after moving the consonant.
* input: hello
* output: "ellohay"
7. Will add -way to the end of words that begin with a vowel.
* input: aloha
* output: "alohaway"
8. Will count "qu" at the beginning of a word as a consonant and move it appropriately.
* input: question
* output: "estionquay"
9. Will respect capitalization of words
* input: Hello
* output: "Ellohay"
10. Will maintain punctuation.
* input: Hello, everyone!
* output: Ellohay, everyoneway!
