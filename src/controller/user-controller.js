import userService from "../service/user-service.js";
import userSerevice from "../service/user-service.js";

const register = async (req, resp, next) => {
    try {
        const result = await userSerevice.register(req.body)
        resp.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

const login = async (req, resp, next) => {
    try {
        const result = await userService.login(req.body);
        resp.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

export default {
    register,
    login
}