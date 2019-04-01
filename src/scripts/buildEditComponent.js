const buildEditForm = (journalObject) => {
    let docFrag = document.createDocumentFragment();

    docFrag.appendChild(buildElement('label', undefined, 'Date: '));
    let editDate = buildElement('input', `editJournalDate--${journalObject.id}`, undefined, journalObject.date)
    editDate.type = 'date';
    docFrag.appendChild(editDate);

    docFrag.appendChild(buildElement('label', undefined, 'Concepts: '))
    docFrag.appendChild(buildElement('input', `editJournalConcepts--${journalObject.id}`, undefined, journalObject.concepts));

    docFrag.appendChild(buildElement('label', undefined, 'Entry: '))
    docFrag.appendChild(buildElement('input', `editJournalEntry--${journalObject.id}`, undefined, journalObject.entry));

    docFrag.appendChild(buildElement('label', undefined, 'Mood'));
    let moodSelect = buildElement('select', `editJournalMood--${journalObject.id}`, undefined, journalObject.mood);
    moodSelectOptions = ['Not well', 'Could be Better', 'Okay', 'Good', 'Solid', 'Confident'];
    for (let i = 0; i < moodSelectOptions.length; i++) {
        let moodOption = buildElement('option');
        moodOption.text = moodSelectOptions[i];
        moodOption.value = moodSelectOptions[i];
        moodSelect.appendChild(moodOption);
    }
    docFrag.appendChild(moodSelect);

    const updateJournalButton = buildElement('button', undefined, 'Update');
    updateJournalButton.addEventListener('click', handleUpdate);
    docFrag.appendChild(updateJournalButton);

    return docFrag;
}