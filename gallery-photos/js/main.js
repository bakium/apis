fetch("https://picsum.photos/500")
    .then(res => res)
    .then(data => {
        console.log(data.url)
        displayImage(data.url)
    })
    .catch(err => console.log("Err: ", err))


function displayImage(url) {
    const target = document.getElementById('gallery-img-1').src = url
}