import firebaseServer from "../utils/firebaseServer"
import {getAuth} from "firebase-admin/auth"

export default defineEventHandler(async (event) => {
    console.log("profile");
    firebaseServer();
    const {token} = await readBody(event)
    // const {token} = await readBody(event)
    return {
        name: "Dustin"
    }
});