export default function (event, request, opts) {

    const {
        backendUri
    } = useRuntimeConfig();

    let token = getCookie(event, "authCookie") || 0

    let headers = {
        "Authorization": "Bearer " + token,
        "Accept": "application/json",
        ...opts?.headers,
    };

    return $fetch(request, {
        baseURL: backendUri,
        ...opts,
        headers: headers
    })
}