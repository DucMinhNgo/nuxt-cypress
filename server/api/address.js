export default defineEventHandler(async () => {
    const data  = await import('~/mock/data/address.json');
    return {
        addressData: data.default,
    };
})