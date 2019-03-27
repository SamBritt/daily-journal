const handlePost = () => {
    entryToPost = journalEntry(dateField.value, conceptsField.value, entryField.value, moodField.value);
    API.postEntries(entryToPost);
}