postButton.onclick = function (event) {
    event.preventDefault();

    let user = {
        nickname: document.getElementById('nickname').value,
        catMail: document.getElementById('catMail').value,
        humanName: document.getElementById('humanName').value,
        humanPhone: document.getElementById('humanPhone').value,
        homeAddress: document.getElementById('homeAddress').value
    }
    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));


}