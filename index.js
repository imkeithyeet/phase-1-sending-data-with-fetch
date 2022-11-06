const { bodyParser } = require("json-server");

// Add your code here
function submitData(name,email){
    return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
              },
             
        body:JSON.stringify({
            name,
            email
        })
    })

    .then(function (response) {
    return response.json()
    })
    .then(function (object) {
    document.body.innerHTML = object["id"]
    })
    .catch(function (requireError) {
        document.body.innerHTML = requireError.message
    })
    }