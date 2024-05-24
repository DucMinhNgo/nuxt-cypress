export default defineEventHandler(async (event) => {
    try {
    const token = getCookie(event, 'authCookie');
    // console.log(token);
    return {
        token,
    };
} catch(error) {
    return {
        token: ''
    }
}
})