// Add your code here
const userData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userData),
};


function submitData() {
    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(data => document.body.innerHTML = data.id)
        .catch(error => document.body.innerHTML = error.message);
}

submitData();