const APIurl = "https://picsum.photos/500/500"

function fetchUrl() {
    fetch(APIurl)
        .then(data => displayImage(data.url))
        .catch(err => console.log("Err: ", err))
}

const target = document.getElementById('photo-gallery')

function displayImage(url) {
    if (!url) return
    const img = document.createElement('img')
    img.src = url
    target.appendChild(img)
}

function getMultipleImages() {
    let numberOfImage = 9
    let count = 1

    while (count <= numberOfImage) {
        fetchUrl()
        count++
    }
}

getMultipleImages()
