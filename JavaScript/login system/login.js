const login_users = {
    1: {
        "id": "Jonas",
        "username": "Jonas",
        "password": "123"
    }
};



function validate() {
    const users_length = Object.keys(login_users).length;

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    for (let e in login_users) {
        if (login_users[e].username == username && login_users[e].password == password) {
            window.alert('you logged in!!');
            //console.log('you succesfully logged in');
        } else{
            console.log('you did something wrong');
        }
    }
}