const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'

document.querySelector('button').addEventListener('click', fetchWord)

function displayDefinition(data) {

    if (!data[0]) return
    let customData = ""

    customData = `<h2>${data[0].word}</h2>`

    customData += '<ol>'

    data[0].meanings[0].definitions
        .map((definition, index) => {
            console.log(definition);
            return customData +=
                `<li>${definition.definition}</li>
                <br>
            `
        })

    customData += '</ol>'

    document.querySelector('#definition').innerHTML = customData
}

function fetchWord() {

    const word = String(document.querySelector('input').value)
    if (!word) return;
    const url = `${baseUrl}/${word}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data[0].meanings[0].definitions[0]) // all definitions
            return displayDefinition(data)
        })
        .catch(err => console.error("Error: ", err))
}
