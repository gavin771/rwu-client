export const userActions = {
    login,
    logout,
    register
};

export function login(username, password) {
   console.log('Logged In UserName',username);
   console.log('Logged In Password',password);
}

export function loginFacebook() {
    console.log('Logged In Facebook');
}

export function loginGoogle() {
    console.log('Logged In Google');
}

export function logout() {
    console.log('Logged Out');
}

export function register() {
    console.log('Registered');
}

export function registerFacebook() {
    console.log('Registered With Facebook');
}

export function registerGoogle() {
    console.log('Registered With Google');
}
