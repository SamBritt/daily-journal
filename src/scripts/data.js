const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    getEntry(journalEntryId){
        return fetch(`http://localhost:3000/entries/${journalEntryId}`)
        .then(response => response.json());
    },
    postEntries(entries) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entries)
        })
    },
    deleteEntry(journalEntryId) {
        return fetch(`http://localhost:3000/entries/${journalEntryId}`, {
            method: "DELETE"
        })
    },

    putEntry(journalEntryId, entry){
        return fetch(`http://localhost:3000/entries/${journalEntryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }

}