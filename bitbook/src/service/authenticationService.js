import { dataServices } from './dataService';

class AuthService {

    userLogin = (data) => {
        dataServices.login(data)
            .then((result) => {
                console.log(result);
                sessionStorage.setItem('user', JSON.stringify(result))
            })
    }

    userLogout = () => {
        sessionStorage.clear()
    }

    userRegister = (data) => {
        dataServices.register(data)
            .then((result) => {
                sessionStorage.setItem('user', result)
            })
    }

    isLoggedIn = () => {
        if (sessionStorage.getItem('user')) {
            let stringUser = sessionStorage.getItem('user');
            let objUser = JSON.parse(stringUser);
            if (objUser.sessionId) {
                console.log(objUser.sessionId)
                return true;
            } else {
                return false;
            }
        }
    }

}

export const authService = new AuthService();