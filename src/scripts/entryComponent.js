const entryDate = document.querySelector('#journalDate');
const entryTitle = document.querySelector('#entryTitle');
const mainEntry = document.querySelector('#mainEntry');
const entryMood = document.querySelector('#entryMood');
const entryLog = document.querySelector('.entryLog');

const entryComponent = Object.create(API);
entryComponent.makeJournalEntryComponent = (journalEntry) => {
    return `
        <section>
        <h1>Journal Entry: </h1>
        <div>Date: ${journalEntry.date}</div>
        <div>Concepts: ${journalEntry.concepts}</div>
        <div>Entry: ${journalEntry.entry}</div>
        <div>Mood: ${journalEntry.mood}</div>
        </section>
    `
}
const journalEntry = (date, concepts, entry, mood) => ({
    "date": date,
    "concepts": concepts,
    "entry": entry,
    "mood": mood
});

// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry
//     return `
//         <section>Journal Entry:
//         <div>Date: ${journalEntry.date}</div>
//         <div>Concepts: ${journalEntry.concepts}</div>
//         <div>Entry: ${journalEntry.entry}</div>
//         <div>Mood: ${journalEntry.mood}</div>
//         </section>
//     `
// }