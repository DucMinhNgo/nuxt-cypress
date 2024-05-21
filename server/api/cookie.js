export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'authCookie');
    return {
        token,
    };
})