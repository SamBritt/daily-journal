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

//Journal Entry p3
const entryDate = document.querySelector('#journalDate');
const entryTitle = document.querySelector('#entryTitle');
const mainEntry = document.querySelector('#mainEntry');
const entryMood = document.querySelector('#entryMood');
const entryLog = document.querySelector('.entryLog');

const journalEntries = [{
    date: "September 16, 2019",
    concepts: "Objects in Javascript",
    entry: "We learned about objects!",
    mood: "Awesome"
}];

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <section>Journal Entry:
        <div>Date: ${journalEntry.date}</div>
        <div>Concepts: ${journalEntry.concepts}</div>
        <div>Entry: ${journalEntry.entry}</div>
        <div>Mood: ${journalEntry.mood}</div>
        </section>
    `
}

const renderJournalEntries = (entries) => {
    for(let item in entries){
        entryLog.innerHTML += makeJournalEntryComponent(entries[item]);
    }
}

renderJournalEntries(journalEntries);


