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

// let recordJournal = document.getElementById('recordEntryButton');


buildForm();
buildSearch();
API.getJournalEntries().then(r => renderjournalEntries(r));
document.getElementById('recordEntryButton').addEventListener("click", handlePost);
console.log(API)






