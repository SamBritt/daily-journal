// const renderJournalEntries = (entries) => {
//     entries.forEach(element => {
//         entryLog.innerHTML += makeJournalEntryComponent(element);
//     });
// }

const journalEntries = Object.create(API);

journalEntries.renderjournalEntries = (entries) => {
    entries.forEach(element => {
        entryLog.innerHTML += entryComponent.makeJournalEntryComponent(element);
    });
}
