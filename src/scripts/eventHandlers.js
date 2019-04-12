const handlePost = () => {
    let dateField = document.querySelector('#journalDate')
    let conceptsField = document.querySelector('#entryTitle')
    let entryField = document.querySelector('#journalEntry')
    let moodField = document.querySelector('#entryMood')

    let entryToPost = journalEntry(dateField.value, conceptsField.value, entryField.value, moodField.value);
    API.postEntries(entryToPost).then(() => API.getJournalEntries()).then(r => renderjournalEntries(r))
}

const handleFilterPosts = () => {
    let valueToFind = event.target.value;
    API.getJournalEntries().then(response => {
        let filtered = response.filter(e => {
            return e.mood == valueToFind;
        })
        renderjournalEntries(filtered);
    })
}
const handleDelete = () => {
    let targetId = event.target.parentNode.id.split('--')[1];
    API.deleteEntry(targetId).then(() => API.getJournalEntries()).then(r => renderjournalEntries(r));
}
const handleEdit = () => {
    let targetId = event.target.parentNode.id.split('--')[1];

    let journalSection = document.querySelector(`#journal-entry--${targetId}`);
    clearElement(journalSection);

    API.getEntry(targetId).then(journalToEdit => {
        const editForm = buildEditForm(journalToEdit);
        journalSection.appendChild(editForm);
    })
}
const handleUpdate = () => {
    console.log('Updated!')
    let targetId = event.target.parentNode.id.split("--")[1];

    const editJournalDate = document.querySelector(`#editJournalDate--${targetId}`);
    const editJournalConcepts = document.querySelector(`#editJournalConcepts--${targetId}`);
    const editJournalEntry = document.querySelector(`#editJournalEntry--${targetId}`);
    const editJournalMood = document.querySelector(`#editJournalMood--${targetId}`);

    let postToPut = {
        "date": editJournalDate.value,
        "concepts":editJournalConcepts.value,
        "entry": editJournalEntry.value,
        "mood": editJournalMood.value
    }

    API.putEntry(targetId, postToPut).then(() => API.getJournalEntries()).then(r => renderjournalEntries(r));

    console.log(editJournalDate.value, editJournalConcepts.value, editJournalEntry.value, editJournalMood.value)

}