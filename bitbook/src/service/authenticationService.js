import { dataService } from './dataService';

class AuthService {

    userLogin = (data) => {
        dataService.login(data)
            .then((result) => {
                sessionStorage.setItem('user', result)
            })
    }

    userLogout = () => {
        sessionStorage.clear()
    }

    userRegister = (data) => {
        dataService.register(data)
        .then((result) => {
            sessionStorage.setItem('user', result)
        })
    }

    isLoggedIn = () => {
        let stringUser = sessionStorage.getItem('user');
        let objUser = JSON.parse(stringUser);
        if(objUser.sessionId){
            return true;
        }
    }




}

export const authService = new AuthService();