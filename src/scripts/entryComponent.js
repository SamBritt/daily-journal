const entryDate = document.querySelector('#journalDate');
const entryTitle = document.querySelector('#entryTitle');
const mainEntry = document.querySelector('#mainEntry');
const entryMood = document.querySelector('#entryMood');
const entryLog = document.querySelector('.entryLog');



const makeJournalEntryComponent = (journalEntry) => {
    const section = buildElement('section', undefined);
    section.appendChild(buildElement("h1", `journal-entry--${journalEntry.id}`, "Journal Entry: "))
    section.appendChild(buildElement('div', undefined, `${journalEntry.date}`));
    section.appendChild(buildElement('div', undefined, `${journalEntry.concepts}`));
    section.appendChild(buildElement('div', undefined, `${journalEntry.entry}`));
    section.appendChild(buildElement('div', undefined, `${journalEntry.mood}`));
    
    return section;
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