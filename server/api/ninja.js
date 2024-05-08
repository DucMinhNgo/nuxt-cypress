export default defineEventHandler(async (event) => {
    const { } = getQuery(event);

    const {age, name} = await readBody(event);
    const {currencyKey, dustinKey} = useRuntimeConfig();

    // const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`;

    // const {data} = await $fetch(uri);

    return {
        message: `Hello, ${name}! You are ${age} years old`,
        // data,
        dustinKey,
    }
})