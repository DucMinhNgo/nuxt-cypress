import firebaseServer from "../utils/firebaseServer"
// import {getAuth} from "firebase-admin/auth"

export default defineEventHandler(async(event) => {
    const {type} = await readBody(event);

    switch (type) {
        case "login":
            firebaseServer(type)
            return await loginFirebase(event);
        // case "profile":
        //     return await getFirebaseProfile(event);
    }
   
})

// const getFirebaseProfile = async (event) => {
//     // const {token} = await readBody(event);
//     // const token = getCookie(event, 'authCookie')
//     const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkUwSVZUUSJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9maXItbm90aWZpY2F0aW9uLXNhbXBsZS1kZWFmMCIsImF1ZCI6ImZpci1ub3RpZmljYXRpb24tc2FtcGxlLWRlYWYwIiwiYXV0aF90aW1lIjoxNzE2MTc2NjAyLCJ1c2VyX2lkIjoiUkFFamNJejR4QVA1bktBcUpibklzTFk0YVY2MiIsInN1YiI6IlJBRWpjSXo0eEFQNW5LQXFKYm5Jc0xZNGFWNjIiLCJpYXQiOjE3MTYxNzY2MDMsImV4cCI6MTcxNjYwODYwMywiZW1haWwiOiJkdWNhdGlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImR1Y2F0aUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.nc0OeY-PiIhw2fsdW8nfsx7QMxQ7tt9UL1Wjk0Pxw9aHTatIwbq3azVvApoOxpMwBI-xcxZET9v_sWQwphN4jVMQgpRef9N-vwAUN5JjJXecaATt92MKkWbDfmlxAlVuPL1eAqFSqFseKrrrGdx1ZeEA4FXz8_rTsm7t0sz5VoI92lJVS-uMNmY-9fB5ZvkOMgrflQmiygprVY7BzB0mpAwN-CPiPhU24dXm-p39BEs5rJmZCeCTxbgKWr49QP_T267YTv0xwy9JDWqCHgPy0TS6TptIL-FN8vEyxuvcSaWd4mp05MmVgVI3WYnyncOTxWRhcL8WQNuiYxlW3EW3dQ';
//     console.log(token);
//     const user = await getAuth().getUser(token);
//     console.log({user});
  
//     return {test: "Dustin", token: token};
// }

const loginFirebase = async (event) => {
    const {token} = await readBody(event)
    const expiresIn = 60 * 60 * 24 * 5 * 1000; 

    console.log(token);

    try{
        // const options = {
        //     maxAge: expiresIn,
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        // }
    
        // const authCookie = await getAuth().createSessionCookie(token, {expiresIn})
    
        // setCookie(event, 'authCookie', authCookie,options)
        setCookie(event, 'authCookie', token)

        return {
            statusCode: 200,
            message: "Auth successful"
        }
    }
    catch(err){
        throw createError({statusCode: 401, statusMessage: "Unauthorized"})
    }
}