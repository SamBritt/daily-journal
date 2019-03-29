const entryLog = document.querySelector('.entryLog');




const makeJournalEntryComponent = (journalEntry) => {
    const section = buildElement('section', `journal-entry--${journalEntry.id}`, undefined);
    section.appendChild(buildElement("h1", undefined, "Journal Entry: "))
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