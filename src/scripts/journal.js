//Journal Entry p2
// const entries = [];

// const entryDate = document.querySelector('#journalDate');
// const entryTitle = document.querySelector('#entryTitle');
// const mainEntry = document.querySelector('#mainEntry');
// const entryMood = document.querySelector('#entryMood');

// const journalEntry = {
//     date: "September 16, 2019",
//     concepts: "Objects in Javascript",
//     entry: "We learned about objects!",
//     mood: "Awesome"
// }


// entries.push(journalEntry);
// console.table(entries);

//Journal Entry p3////////


// const journalEntries = [{
//     date: "September 16, 2019",
//     concepts: "Objects in Javascript",
//     entry: "We learned about objects!",
//     mood: "Awesome"
// }];


// renderJournalEntries(journalEntries);
///////////
//p4

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
    */
let dateField = document.querySelector('#journalDate')
let conceptsField = document.querySelector('#entryTitle')
let entryField = document.querySelector('#journalEntry')
let moodField = document.querySelector('#entryMood')

let recordJournal = document.getElementById('recordEntryButton');
let entryToPost;

recordJournal.addEventListener("click", handlePost);

API.getJournalEntries().then(r => renderjournalEntries(r));
console.log(API)






