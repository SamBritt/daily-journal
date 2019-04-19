// const renderJournalEntries = (entries) => {
//     entries.forEach(element => {
//         entryLog.innerHTML += makeJournalEntryComponent(element);
//     });
// }
const clearElement = domElement => {
    while (domElement.firstChild) {
      domElement.removeChild(domElement.firstChild);
    }
  };
  
const renderjournalEntries = (entries) => {
    let docFrag = document.createDocumentFragment();
    entryLog.appendChild(entryArticle)
    entries.forEach(element => {
        docFrag.appendChild(makeJournalEntryComponent(element));
    });
    let articleToClear = document.querySelector("#entryArticle")
    clearElement(articleToClear);
    entryArticle.appendChild(docFrag)
    // entryLog.appendChild(docFrag)

}

const buildElement = (element, elementId, elementTextContent, elementValue) => {
    let htmlElement = document.createElement(element);
    if (elementId) {
      htmlElement.setAttribute("id", elementId);
    }
    if (elementValue) {
      htmlElement.setAttribute("value", elementValue);
    }
    htmlElement.textContent = elementTextContent;
    return htmlElement;
  };
