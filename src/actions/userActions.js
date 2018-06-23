
export const userActions = {
    login,
    register,
    loginFacebook,
    loginGoogle,
    registerFacebook,
    registerGoogle
};

//const apiUrl = "http://localhost:3000";

function login(username, password) {
    /*const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };*/

    /*return fetch(`${apiUrl}/api/auth/login`, requestOptions)
        .then(handleResponse);*/
}


function register(username,password) {
    /*const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(username,password)
    };*/

    //return fetch(`${apiUrl}/api/auth/register`, requestOptions).then(handleResponse);
}

/*function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                console.log('Error 401');
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}*/

function loginFacebook() {
    console.log('Logged In Facebook');
}

function loginGoogle() {
    console.log('Logged In Google');
}

function registerFacebook() {
    console.log('Registered With Facebook');
}

function registerGoogle() {
    console.log('Registered With Google');
}
