import { myUserAxios } from '../../../axios/axios.config';


class UserDataService {

    async login(data: User) {

        return await myUserAxios.post("login/", data);
    }

    async signup(data: User) {


        return await myUserAxios.post("signup/", data);

    }

}


export default new UserDataService();
