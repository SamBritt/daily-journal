const entryForm = document.querySelector('.form');
const buildForm = () => {
    const form = buildElement('form');
    form.action = 'input';

    const dateDiv = buildElement('div');
    const dateFieldset = buildElement('fieldset');
    dateDiv.appendChild(dateFieldset);
    const dateLabel = buildElement('label', undefined, 'Date of Entry');
    dateLabel.HTMLfor = 'journalDate';
    dateFieldset.appendChild(dateLabel);
    const dateInput = buildElement('input', 'journalDate');
    dateInput.type = 'date'
    dateInput.name = 'journalDate'
    dateInput.required = true;
    dateFieldset.appendChild(dateInput);

    const conceptsDiv = buildElement('div');
    const conceptsFieldset = buildElement('fieldset');
    conceptsDiv.appendChild(conceptsFieldset)
    const conceptsLabel = buildElement('label', undefined, 'Concepts Covered');
    conceptsLabel.HTMLfor = 'conceptsCovered';
    conceptsFieldset.appendChild(conceptsLabel);
    const conceptsInput = buildElement('input', 'entryTitle');
    conceptsInput.type = 'text';
    conceptsInput.required = true;
    conceptsFieldset.appendChild(conceptsInput);

    const entryDiv = buildElement('div');
    const entryFieldset = buildElement('fieldset');
    entryDiv.appendChild(entryFieldset);
    const entryLabel = buildElement('label', undefined, 'Journal Entry');
    entryLabel.HTMLfor = 'journalEntry';
    entryFieldset.appendChild(entryLabel);
    const entryInput = buildElement('textarea', 'journalEntry');
    entryInput.cols = 30;
    entryInput.rows = 5;
    entryInput.required = true;
    entryFieldset.appendChild(entryInput);

    const moodDiv = buildElement('div');
    const moodFieldset = buildElement('fieldset');
    moodDiv.appendChild(moodFieldset);
    const moodLabel = buildElement('label', undefined, 'Mood');
    moodLabel.HTMLfor = 'mood';
    moodFieldset.appendChild(moodLabel);
    let moodSelect = buildElement('select', 'entryMood');
    moodSelect.required = true;
    moodFieldset.appendChild(moodSelect);
    moodSelectOptions = ['Not well', 'Could be Better', 'Okay', 'Good', 'Solid', 'Confident'];
    for (let i = 0; i < moodSelectOptions.length; i++) {
        let moodOption = buildElement('option');
        moodOption.text = moodSelectOptions[i];
        moodOption.value = moodSelectOptions[i];
        moodSelect.appendChild(moodOption);
    }

    console.log(moodSelect)

    const recordJournalButton = buildElement('button', 'recordEntryButton', 'Record Journal Entry');
    recordJournalButton.type = 'button';

    const radioDiv = buildElement('div', 'radioDiv');
    const radioField = buildElement('fieldset');
    const radioLegend = buildElement('legend', undefined, 'Sort By Mood');
    radioDiv.appendChild(radioField);
    radioField.appendChild(radioLegend);
    
//Loop through available inputs, set textcontent and values of radio buttons to such
    for(let i = 0; i < moodSelectOptions.length; i++){
        let radioButton = buildElement('input', `radio${moodSelectOptions[i]}`, undefined, moodSelectOptions[i]);
        radioButton.name = 'mood';
        radioButton.type = 'radio';
        radioButton.addEventListener('click', handleFilterPosts)
        let radioLabel = buildElement('label', undefined, moodSelectOptions[i]);
        radioLabel.htmlFor = `radio${moodSelectOptions[i]}`;
        let innerDiv = buildElement('div');
        innerDiv.appendChild(radioButton);
        innerDiv.appendChild(radioLabel);

        radioField.appendChild(innerDiv);
        
    }
    
    form.appendChild(dateDiv)
    form.appendChild(conceptsDiv)
    form.appendChild(entryDiv)
    form.appendChild(moodDiv)
    form.appendChild(recordJournalButton);
    entryForm.appendChild(form)
    entryForm.appendChild(radioDiv);

}
