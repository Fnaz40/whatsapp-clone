let handleSuccess = function (response) {
    // handle success
    console.log("SUCCESS!");
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data[i]);
        let message = response.data[i];
        document.querySelector("ul").innerHTML += `
        <li class="message">
        <div class="profile">
        <img src="${message.profilePic}" />
        </div>
        <div class="text">
            <h2>${message.name}</h2>
            <p class="firstline">${message.firstLine}</p>
        </div>
        <div class="time">
        <time>${message.time}</time>
        </div>
        </li>
    `
    }
}
let handleError = function (error) {
    // handle error
    console.log("ERROR!!!!!!! :'-[ ");
    console.log(error);
}

let finishUp = function () {
    // always executed
    console.log("THE END!");
}


// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(handleSuccess)
    .catch(handleError)
    .finally(finishUp)