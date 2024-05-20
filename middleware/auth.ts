
function isAuthenticated(): boolean { return false }
// ---cut---
export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('authCookie')
    // console.log(token);

    console.log(useAuth().verifyToken('eyJhbGciOiJSUzI1NiIsImtpZCI6IkUwSVZUUSJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9maXItbm90aWZpY2F0aW9uLXNhbXBsZS1kZWFmMCIsImF1ZCI6ImZpci1ub3RpZmljYXRpb24tc2FtcGxlLWRlYWYwIiwiYXV0aF90aW1lIjoxNzE2MTcwNjA2LCJ1c2VyX2lkIjoiUkFFamNJejR4QVA1bktBcUpibklzTFk0YVY2MiIsInN1YiI6IlJBRWpjSXo0eEFQNW5LQXFKYm5Jc0xZNGFWNjIiLCJpYXQiOjE3MTYxNzA2MDYsImV4cCI6MTcxNjYwMjYwNiwiZW1haWwiOiJkdWNhdGlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImR1Y2F0aUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.K500EpsrYzALdI4gptwnjnOKI5wm8HX7sVYN9HDOqnuWSqzL9DidOVeKKF3QxMLYvTJEmwxo1VDKJqH18EGzK2TeiPUxExOY-LPEf02rxdWPbOVm1LaKUcltPVcVUyru89_0OTIlW7c4o4U68G7UewFfcpRPrcXuOD_4A4pMY6ZASK5K1TriCAUKRijr0XPg9rK3DZZB8fpzEBBiITncrUrG7Rjmd7ZRy1_0PMjjMb1FwI25soEVoUzrzH_RNGwscQGzF6TXzhxE6ouLNx2nAxL627JbER1X3_amyepvvy8E6KuLjaXdLkUfiUmdO10euN1yFnAgpcFuBet38bMTVg'))

    // const profile = await $fetch("/api/profile", {
    //     method: "POST",
    //     body: JSON.stringify({ token })
    // })

    // console.log({ profile });


    // isAuthenticated() is an example method verifying if a user is authenticated
    // if (isAuthenticated() === false) {
    //     return navigateTo('/login');
    // }

    // console.log(token.value);
    // const user = await getAuth().verifyIdToken(token.value ?? '');
    // console.log(user);


    // navigateTo('/login')
})
