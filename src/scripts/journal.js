
const entries = [];

const entryDate = document.querySelector('#journalDate');
const entryTitle = document.querySelector('#entryTitle');
const mainEntry = document.querySelector('#mainEntry');
const entryMood = document.querySelector('#entryMood');

const journalEntry = {
    date: "September 16, 2019",
    concepts: "Objects in Javascript",
    entry: "We learned about objects!",
    mood: "Awesome"
}


entries.push(journalEntry);
console.table(entries);




