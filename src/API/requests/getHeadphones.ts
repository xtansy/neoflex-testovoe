import api from "../instance";

export const getHeadphones = () => {
    return api.get<Headphones>("/headphones")
}