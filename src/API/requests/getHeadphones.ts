import { DB } from "../../db";

export const getHeadphones = () => {
    // simulating a request to the server
    return Promise.resolve(DB);
}