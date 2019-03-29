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
            e.mood === valueToFind;
        })
        console.log(filtered);
    })
}