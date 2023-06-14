fetch("https://randomuser.me/api/?results=5")
    .then(data => data.json())
    .then(data => {
        console.log(data)
        const results = data.results
        console.log(results)
    })