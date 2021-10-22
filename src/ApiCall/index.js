import axios from "axios"

// Make a request for a user with a given ID

const selectUserId = 12
const selectApiPort = 8080

function GetUser() {
    let userApiData = {}

    axios.get(`http://localhost:${selectApiPort}/${selectUserId}/12`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
    });
}

