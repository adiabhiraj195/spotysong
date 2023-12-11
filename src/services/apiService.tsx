import { API } from "./baseApi";

class UserService {
    getUser = (accessToken: string) => {
        return API.get('/me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    }
}

const userService = new UserService();
export default userService;